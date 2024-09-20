import React , {useState} from 'react'


export default function Modifytext(props) {

  const handleOnchange = (event)=>{
    
    settext(event.target.value);
  }

  const handleUpperCase= ()=>{
    const value = text.toUpperCase();
    props.showalert('Converted to uppercase', 'success')
    
    settext(value);
  }
  const handleLowercase = ()=>{
    const value = text.toLowerCase();
    settext(value);
    props.showalert('Converted to Lowercase', 'success')

  }
  const handleClear= ()=>{
    settext("");
    props.showalert('text has been cleaned now ', 'success')

  }
  const handeextraspace = ()=>{    
    // const value = text.replaceAll("  ", "");

    settext(text.replaceAll("   ", " "));
    
    console.log(text);
    props.showalert('Ectraspace has benn removed', 'success')

  }

  const handlecopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showalert('Text copy', 'success')

  }

  const handlepaste= async () => {
    try {
      // Read text from the clipboard
      const text = await navigator.clipboard.readText();
      props.showalert('Text Pasted....', 'success')

      
      // Update the state with the clipboard text
      settext(text);
    } catch (error) {
      console.error('Failed to read clipboard contents: ', error);
    }

  }


  

  const [text, settext] = useState("");



  return (
    <>
    <div className='container my-3'>
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>   
    <div className="mb-3">
    <textarea  style={{backgroundColor: props.mode==='light'?'white':'#0c2233', color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnchange} className="form-control"  rows="6"  placeholder='Enter your Text...... '></textarea>
      </div>

      
      <button onClick={handleUpperCase} className="btn btn-primary mx-1">Convert to Upper case</button>
      <button onClick={handleLowercase} className="btn btn-warning mx-1">Convert to lower case</button>
      <button onClick={handleClear} className="btn btn-success mx-1">Clear text</button>
      <button onClick={handeextraspace} className="btn btn-info mx-1">Remove extra space</button>
      <button onClick={handlecopy} className="btn btn-primary mx-1">Copy text</button>
      <button onClick={handlepaste} className="btn btn-dark mx-1">past text</button>

      

      
    </div>


    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>

      <h1>Text Summary</h1>
      <p> words {text.split(' ').length}  and char  {text.length}</p>
      <h3>Text preview</h3>
      <p>{text.length>0?text:"Enter tou text"}</p>

    </div>

    </>
  )
}
