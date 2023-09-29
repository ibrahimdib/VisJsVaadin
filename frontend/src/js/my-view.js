import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class MyView extends PolymerElement {
	static get template() {
		return html`
      <style>
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
		
      </style>



<head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/css/uikit.min.css" />
</head>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/js/uikit-icons.min.js"></script>
<h3>  this is a polymere style </h3>
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

<h3>  this is a uikit style </h3>
 <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</nav>


`;
	}

	static get is() {
		return 'my-view';
	}
}
customElements.define(MyView.is, MyView);

