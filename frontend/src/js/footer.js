import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class FooterView extends PolymerElement {
	static get template() {
		return html`
		

		<style>
		
		
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

<div id="footer">

	<footer>
		<div class="footer-content">
			<div class="footer-logo">
				<img />
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
		return 'footer-view';
	}
}
customElements.define(FooterView.is, FooterView);

