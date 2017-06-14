        //Index
        function FotoLince() {
            document.getElementById('DracIndex').src = "Media/Lince.png";
            
            document.getElementById("b1").style.backgroundColor="white";
            document.getElementById("b3").style.backgroundColor="#FF6F00";
            document.getElementById("b2").style.backgroundColor="#FF6F00";
         
        }

        function FotoDrac() {
            document.getElementById('DracIndex').src = "Media/Drac.png";
            
            document.getElementById("b1").style.backgroundColor="#FF6F00";
            document.getElementById("b2").style.backgroundColor="white";
           
            document.getElementById("b3").style.backgroundColor="#FF6F00";
        }

        function FotoCafetera() {
            document.getElementById('DracIndex').src = "Media/Cafetera.png";
            
            document.getElementById("b1").style.backgroundColor="#FF6F00";
            document.getElementById("b2").style.backgroundColor="#FF6F00";
            document.getElementById("b3").style.backgroundColor="white";
        }

        function Assignatures() {
            if( Dibuix.style.display == 'none'){
                
                Dibuix.style.display = 'block';
                Modelatge.style.display = 'block';
                Animacio3.style.display = 'block';
                StopMotion.style.display = 'block';
                Animacio2.style.display = 'block';
                Color.style.display = 'block';
                Acabats3.style.display = 'block';
                Iluminacio.style.display = 'block';
                HTML.style.display = 'block';
                ProgramacioJocs.style.display = 'block';
                Textoritzacio.style.display = 'block';
                EsculturaDigital.style.display = 'block';
                Escultura.style.display = 'block';
                
                
                
            }else{
                Dibuix.style.display = 'none';
                Modelatge.style.display = 'none';
                Animacio3.style.display = 'none';
                StopMotion.style.display = 'none';
                Animacio2.style.display = 'none';
                Color.style.display = 'none';
                Acabats3.style.display = 'none';
                Iluminacio.style.display = 'none';
                HTML.style.display = 'none';
                ProgramacioJocs.style.display = 'none';
                Textoritzacio.style.display = 'none';
                EsculturaDigital.style.display = 'none';
                Escultura.style.display = 'none';
                
                
            }
        }

    
    Assignatures();


