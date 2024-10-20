import * as fabric from 'fabric';
import { useState, useRef, useEffect } from 'react';

function Link({ receivedUrl }) {
  const canvaref = useRef(null);
  const [count, setCount] = useState(0);
  const [backgroundUrl, setBackgroundUrl] = useState(receivedUrl); 
  const [canvas, setCanvas] = useState(null); 
  useEffect(() => {
    if (!canvas && canvaref.current) {
      const fabricCanvas = new fabric.Canvas(canvaref.current); 
      setCanvas(fabricCanvas);

      
      return () => {
        if (fabricCanvas) {
          fabricCanvas.dispose();
        }
      };
    }
  }, [canvas]); 
  
  const addElement = () => {
    const canvas=new fabric.Canvas(canvaref.current);
      canvas.add(new fabric.Circle({ radius: 30, fill: '#fffff', top: 100, left: 100 }));
      setCount(count + 1);
      return()=>{
        canvas.dispose();
      }
    
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    backgroundImage: `url(${backgroundUrl})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '400px',
    height: '400px',
    marginLeft: '38%',
    position: 'relative',
  };

  return (
    <div className="containers" style={containerStyle}>
      <div style={{ position: "absolute", border: "1px dotted gray", top: "0%", left: "0%" }}>
      
        <canvas
          ref={canvaref}  
          width="400"
          height="400"
        />
      </div>

      
      {count === 0 && (
        <div
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: "30%",
            left: "30%",
            height: "150px",
            width: "150px",
            opacity: "20%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "30%",
            color: "white",
            cursor: "pointer",
          }}
          onClick={addElement}

        >
          Click to Add Circle
        </div>
        
      )}
    </div>
  );
}

export default Link;
