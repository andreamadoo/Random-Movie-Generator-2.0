import { useState, useEffect} from 'react';

const Add = ({data,setData}) => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [url, setUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const sendData = async (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
          Name:e.target["name"].value,
          Genre:e.target["genre"].value,
          ImageUrl:e.target["imageUrl"].value
        })
        console.log(body)
        const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: myHeaders,
          body: body,
          redirect: 'follow'
        };
        const response = await fetch("https://localhost:7265/Movie", requestOptions)
        const deserializedJSON = await response.json();
        console.log(deserializedJSON)
        setData(deserializedJSON);
        setName('');
        setGenre('');
        setUrl('');
        setSuccessMessage('Movie successfully added !')
      }

return (
    <div className="form">
        <h1>Add Your Movie</h1>
        <form className="form-style" onSubmit={sendData}>
            <input className='input-form' placeholder='Write Name...' type="text" name='name' value={name} onChange={event => setName(event.target.value)}/>
            <input className='input-form' placeholder='Write Genre...' type="text" name='genre' value={genre} onChange={event => setGenre(event.target.value)} />
            <input className='input-form' placeholder='Write Url...' type="text" name='imageUrl' value={url} onChange={event => setUrl(event.target.value)}/>
            <button className='glow-on-hover'>Submit</button>
        </form>
        {successMessage ? <p>{successMessage}</p> : null}
  </div>
)
}

export default Add;