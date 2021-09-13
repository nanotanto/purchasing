<?php
namespace App\Http\Controllers;
use App\Log;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogController extends Controller
{
    //public function saveLog(Request $request){
    //    $data = new Log();
    //    $data->catalog_id = $request->input('id');
    //    $data->user_name = $request->input('user_name');
    //    $data->save();
    //}

    public function saveLog(Request $request){

        // loune 25/3/2006, updated 22/08/2009
        // For more information see:
        // http://siphon9.net/loune/2007/10/simple-lightweight-ntlm-in-php/
        // 
        // This script is obsolete, you should see
        // http://siphon9.net/loune/2009/09/ntlm-authentication-in-php-now-with-ntlmv2-hash-checking/
        //
        // NTLM specs http://davenport.sourceforge.net/ntlm.html
        $headers = apache_request_headers();
        if (!isset($headers['Authorization'])){
        header('HTTP/1.1 401 Unauthorized');
        header('WWW-Authenticate: NTLM');
        exit;
        }
        $auth = $headers['Authorization'];
        if (substr($auth,0,5) == 'NTLM ') {
        $msg = base64_decode(substr($auth, 5));
        if (substr($msg, 0, 8) != "NTLMSSP\x00")
            die('error header not recognised');
        if ($msg[8] == "\x01") {
            $msg2 = "NTLMSSP\x00\x02\x00\x00\x00".
                "\x00\x00\x00\x00". // target name len/alloc
            "\x00\x00\x00\x00". // target name offset
            "\x01\x02\x81\x00". // flags
            "\x00\x00\x00\x00\x00\x00\x00\x00". // challenge
            "\x00\x00\x00\x00\x00\x00\x00\x00". // context
            "\x00\x00\x00\x00\x00\x00\x00\x00"; // target info len/alloc/offset
            header('HTTP/1.1 401 Unauthorized');
            header('WWW-Authenticate: NTLM '.trim(base64_encode($msg2)));
            exit;
        }
        else if ($msg[8] == "\x03") {
            function get_msg_str($msg, $start, $unicode = true) {
            $len = (ord($msg[$start+1]) * 256) + ord($msg[$start]);
            $off = (ord($msg[$start+5]) * 256) + ord($msg[$start+4]);
            if ($unicode)
                return str_replace("\0", '', substr($msg, $off, $len));
            else
                return substr($msg, $off, $len);
            }
            $user = get_msg_str($msg, 36);
            $domain = get_msg_str($msg, 28);
            $workstation = get_msg_str($msg, 44);
            //print "You are $user from $domain/$workstation";
        }
        }

        $data = new Log();
        $data->catalog_id = $request->input('id');
        $data->user_name = $user;
        $data->save();

    }

    public function log($id){
        $doc  = log::where('catalog_id','=',$id)->orderBy('created_at', 'ASC')->get(); 

        return response()->json($doc); 
    }
}
