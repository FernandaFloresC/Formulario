// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {

    localStorage.clear();

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const setUrl = () => {
    // https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api/Ventas/Call/HorarioDisponible
    const url = 'https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api'
    return url

}
export const setUrlCalidad = () => {

    const url_calidad = 'https://app.soluziona.cl/API_v1_prod/CallSouthPeru/API_CRM_RetencionesClinica/api/'
    return url_calidad

}

export const setDireccion = () => {
    // const direcion = '/Orkesta/Aporta/VentasCRM'
    // const direcion = ''
    const direccion = '/Orkesta/Aporta/VideollamadaRegistroCivil/Call/'
    // const direccion = ''
    return direccion

}

export const sesiones = {
    sgui: '',
    scliente: '',
    sid: '',
    sid_usuario: '',
    stoken: '',
};


export const setSesiones = () => {


    sesiones.sgui = localStorage.getItem("localgui");
    sesiones.scliente = localStorage.getItem("localcliente");
    sesiones.sid = localStorage.getItem("localid");
    sesiones.sid_usuario = localStorage.getItem("localid_usuario");
    sesiones.stoken = localStorage.getItem("token");


    return sesiones
}

export const setSesiones2 = (localgui, localcliente, localid, localid_usuario, token) => {

    sessionStorage.setItem('sgui', localgui);
    sessionStorage.setItem('scliente', localcliente);
    sessionStorage.setItem('sid', localid);
    sessionStorage.setItem('sid_usuario', localid_usuario);
    sessionStorage.setItem('stoken', token);

    // sesiones.sgui = localgui;
    // sesiones.scliente = localcliente;
    // sesiones.sid = localid;
    // sesiones.sid_usuario = localid_usuario;
    // sesiones.stoken = token;


}

export const GetSesiones = () => {


    const sesiones_h = {
        sgui: sessionStorage.getItem('sgui'),
        scliente: sessionStorage.getItem('scliente'),
        sid: sessionStorage.getItem('sid'),
        sid_usuario: sessionStorage.getItem('sid_usuario'),
        stoken: sessionStorage.getItem('stoken'),
    };



    return sesiones_h
}

export const direccion = '/Orkesta/CallSouthPeru/MetlifeRetenciones/CRM/';

export const removeSetSession = () => {
    // Reset the properties of the sesiones object to empty strings

    localStorage.clear();

    sesiones.sgui = '';
    sesiones.scliente = '';
    sesiones.sid = '';
    sesiones.sid_usuario = '';
    sesiones.stoken = '';

    console.log(sesiones)

    window.history.pushState(null, '', window.location.href);

    // Redirect to the specified direccion
    window.location.href = direccion;
};

export const clearSession = () => {
    // Reset the properties of the sesiones object to empty strings

    localStorage.removeItem("localgui");
    localStorage.removeItem("localcliente");
    localStorage.removeItem("localid");
    localStorage.removeItem("localid_usuario");
    localStorage.removeItem("token");

    sessionStorage.removeItem("sgui");
    sessionStorage.removeItem("scliente");
    sessionStorage.removeItem("sid");
    sessionStorage.removeItem("sid_usuario");
    sessionStorage.removeItem("stoken");

};