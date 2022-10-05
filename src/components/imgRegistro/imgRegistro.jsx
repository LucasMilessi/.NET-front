import React,{ useState } from 'react';
import FileBase from 'react-file-base64';

const ImgRegistro = () => {
    const[pastura,setPastura]  = useState([]);
    const[img,setImage] = useState();
    
    const obtenerObjPorID = () => {
        fetch('http://localhost:1234/pastura/search/633b652a12bf22b126779043')
        .then(response => response.json())
        .then(data => {
            setPastura(data); 
        });
        console.log(pastura);
    }

    const imgSave = () => {
        var datos = img.split(',')[0];
        var contentType = img.split(',')[1];
        
        let request = {
            "img":{
                "data":datos,
                "contentType":contentType,
            },
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };

        fetch("http://localhost:1234/pastura/create", requestOptions)
        .then(response => response.json(response))
        .catch(error => console.error('Error:', error))
    };

    return ( <>
        
    <button onClick={()=>obtenerObjPorID()}>ACA</button>
    <FileBase
    type="file"
    multiple={false}
    onDone={({ base64 }) => setImage( base64 )}
    />
    <button onClick={()=>imgSave()}>SAVE</button>
    </>);
}
 
export default ImgRegistro;