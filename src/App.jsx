import "./App.css";

function App() {

  const buttons=[
    {id:1,label:"7",value:"7"},
    {id:2,label:"8",value:"8"},
    {id:3,label:"9",value:"9"},
    {id:4,label:"/",value:"/"},

    {id:5,label:"4",value:"4"},
    {id:6,label:"5",value:"5"},
    {id:7,label:"6",value:"6"},
    {id:8,label:"-",value:"-"},

    {id:9,label:"1",value:"1"},
    {id:10,label:"2",value:"2"},
    {id:11,label:"3",value:"3"},
    {id:12,label:"+",value:"+"},

    {id:13,label:"0",value:"0"},
    {id:14,label:",",value:","},
    {id:15,label:"=",value:"="}
  ]

  const handle_click=(button)=>{
    const output=document.querySelector("#output_zone");
    if(button.value=="="){
      do_calculation();
      return;
    }
    let old_content=output.value;
    let new_content=`${old_content}${button.value}`;
    output.value=new_content;
  }

  const clear_output=()=>{
    document.querySelector("#output_zone").value=""
  }

  const do_calculation=()=>{
    const output=document.querySelector("#output_zone");
    let content=output.value;
    if(content==""){
      alert("Vous n'avez saisi aucune opération");
      return;
    }

    let resultat=eval(content);
    output.value=resultat;
  }
  return (
   <div className="main">
    <h2>Calculatrcie</h2>
    <div className="calculatrice">
      <div className="header">
        <input type="text" readOnly id="output_zone" />
        <button onClick={clear_output}>Effacer</button>
      </div>

      <div className="content">
        {buttons?.map((button)=>{
          return(
            <button 
              onClick={handle_click.bind(this,button)}
              key={button?.id} 
              value={button?.value}>
              {button?.label}
            
            </button>
          )
        })}
      </div>
    </div>
   </div>
  )
}

export default App
