import * as LocalAuthentication from 'expo-local-authentication';

export default biometric = {
    authenticate : LocalAuthentication.authenticateAsync,
    checkBiometricAccess : async (cb) => {LocalAuthentication.getEnrolledLevelAsync().then(e=>{
        // console.log(e)
        cb(e == 3 ? true : false);
    })},
    FNGEnabled : LocalAuthentication.AuthenticationType.FINGERPRINT,
    FIDEnabled : LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,


}