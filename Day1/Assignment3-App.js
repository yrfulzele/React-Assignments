
import './doctor.css';

function Doctor(){
    let docArray = [
        {"id":1,"email":"Neurologist","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg",rating:4},
        {"id":2,"email":"Cardiologist","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg",rating:5},
        {"id":3,"email":"Dentist","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg",rating:3},
        {"id":4,"email":"Gynac","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg",rating:4},
        {"id":5,"email":"Neurologist","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg",rating:4},
        {"id":6,"email":"Cardiologist","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg",rating:5},
        {"id":7,"email":"Dentist","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg",rating:3},
        {"id":8,"email":"Gynac","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg",rating:2}
        ];
    
      const generateStart = (rating) =>
      {
        const stars = [];
        for(let i=0;i<rating;i++ ){
            stars.push(<span className="star">&#9733;</span>);
        }
        return stars;
      }

      let docArray2 =  docArray.map((item, index) => 
        {
          return <div className='card' key={index}>                       
                        <img src={item.avatar}   /> <br/>
                        <span>{item.id}</span>  <br/>
                        <span>{item.first_name+" "+item.last_name}</span>  <br/>
                        <span>{item.email}</span>  <br/>
                        {generateStart(item.rating)}<br/>
                        <button type="button1">Book Appointment</button>

          </div>
        });
    
      return (
        <>
    
        <h1 className="doc-table">Doctor's Details</h1>
        <hr/>
    
        
        {docArray2}
        </>
    );
}

export default Doctor;
