import React from 'react';
import jsonData from  '../data.json';


const Smcard = () => {
  return <div>
      {
          jsonData.map((info)=> {
              console.log(info);
              return(
                <div>
                <img className=""src={info.type} height={60} width={60} />
                <p>{info.data}</p>
                <p>{info.desc}</p>
            </div>
              )
          })
      }
  </div>;
};

export default Smcard;
