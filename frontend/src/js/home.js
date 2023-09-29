import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class HomeView extends PolymerElement {
	static get template() {
		return html`
		
		
      <style id ="style">
        :host {
          /* Styles for the <my-view> host element */
          display: block;
        }

        #ul{
         margin: 0; padding: 8px 15px;
		 list-style: none; 
		display: flex; box-shadow: 0 1px 8px rgba(0,0,0,0.3); 
		width: 100%; height: 50px;
        }

		#link{
			background: #0B84ED;
			 color: #fff;
		 width: 400px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	margin: 10px 20px 10px 0;
			
		}
		
		.li{
		padding: 3px;
		 margin: 10px 20px 10px 0;
			
		}
		
		.stuff{
			display: inline-block; text-decoration: none;  height: 40px;
                                width: var(--btn-width-100);
                                font-size: 1.5rem;
                                display: flex;
                                justify-content: center; 
                               align-items: center; 
                                color: rgb(158, 158, 158);
                                transition: .5s;
		}
		
		
		
footer {
    background-color: #333; /* Dark background color */
    color: #fff; /* Text color */
    padding: 20px 0;
}

/* Center-align the content within the footer */
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
		
      </style>



<div id = "header">

     <ul  id ="ul" >
   <a href='' id="link" > <li> Welcome to Our Site </li></a>
				

           </li>
               <li class="li" >
             <a class="stuff" href='contact-us' >Contact Us</a>
                </li>
             <li class="li">
               <a  class="stuff" href='login' >Login</a>
               </li>
               
                </ul>



		</div>
		

<div id= "footer" >	

<footer>
    <div class="footer-content">
        <div class="footer-logo">
            <img src="university-logo.png" alt="University Logo">
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="campus.html">Campus Life</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>
                University Name<br>
                123 University Street<br>
                City, State ZIP Code<br>
                Phone: (123) 456-7890<br>
                Email: info@university.edu
            </p>
        </div>
    </div>
    <div class="footer-social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-instagram"></a>
    </div>
    <div class="footer-info">
        &copy; 2023 University Name. All rights reserved.
    </div>
</footer>


</div>	
		

`;
	}

	static get is() {
		return 'home-view';
	}
}
customElements.define(HomeView.is, HomeView);

