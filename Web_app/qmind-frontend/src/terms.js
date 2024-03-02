import React from 'react';
import './faq.css';
import {Link} from 'react-router-dom';

function DownloadPDF() {
    return (
      <a href={`${process.env.PUBLIC_URL}/robots.txt`} download="placeholder.txt">
        Download Research Article
      </a>
    );
  }

const TERMS = () => {

    
    return (
        <div className="faq-page">
            <header className="header">
                <Link to="/"><nav className="logo">Home</nav></Link>
                <nav className="nav">
                    <Link to="/faq">FAQ</Link>
                    <Link to="/terms">Terms Of Use</Link>
                    <DownloadPDF />
                </nav>
            </header>
            
            <section className='Terms-of-Use'>
                <div>
                    <h2>Terms of Use for Retina Radar Products</h2>
                    <p>By accessing and using this Product, you agree to be bound by these Terms. If you do not agree to these Terms, do not indicate your acceptance or use the Product. If at anytime you want to withdraw your acceptance of these Terms, you must discontinue your use of the Product. </p>
                    <ol className='terms-list'>
                        <li><b>Definitions.</b></li>
                        <p>“Client User” means an entity who has licensed the Product directly from Retina Radar or sublicensed it through an authorized Retina Radar sublicensor, such as a healthcare provider organization.</p>
                        <p>“End User” means a consumer, patient, or other individual receiving access to the Product from a Client User.</p>
                        <p>“Retina Radar” means the team responsible for creating the Product and associated website, located in Kingston, Ontario, Canada </p>
                        <p>“Product” means the Retina Radar health education information and technology, along with any applicable Third-Party Materials. </p>
                        <p>“Terms” means these Terms of Use for the Retina Radar Products, which may be modified from time to time in accordance with the provisions herein. </p>
                        <p>“Third-Party Materials” means certain works, materials, information, or technology included in the Product that is owned by a third-party.</p>
                        
                        <li><b>Changes.</b></li>
                        <p>Retina Radar reserves the right to change these Terms from time to time. You agree that we may notify you of these changes by posting them here, which is linked from the Product. Your continued use of the Product will be deemed acceptance of the Terms as modified. Any changes to the Terms will be effective as of the date they are posted, so, please review these Terms not only before using the Product for the first time but frequently thereafter. </p>
                        
                        <li><b>Use.</b></li>
                        <p>Retina Radar is a part of the Queen’s Unviersity QMIND chapter with the sole mission of helping better enhance machine learning capacity in healthcare.  </p>
                        <p>The Product is for informational purposes only.  The Product is not a substitute for professional medical care and treatment. The Product is not intended for, nor should it be used as a substitute for, the rendering of medical, nursing, or professional healthcare advice or services or the practice of medicine, in any jurisdiction. Always seek the advice of your healthcare provider before beginning any treatment or if you have any questions regarding a medical condition</p>
                        <p>Do not ignore symptoms or depend on the Product when deciding about emergency care. <b>If you think you may have a medical emergency, call your doctor or 911 immediately.</b> Retina Radar is not recommending or endorsing tests, physicians, products, procedures, opinions, or other information contained in the Product. Images and videos are used for illustrative purposes only. </p>
                        <p>Developments in medical research may impact the Product. Any implied warranty or representation about the resource’s accuracy, relevance, timeliness, completeness, or appropriateness for a particular purpose is hereby disclaimed. Your use of the Product is also subject to any additional disclaimers and caveats that may appear throughout the Product.</p>
                        <p>These Terms and your permission to access and use the Product automatically terminate if you fail to comply with any of the Terms. Termination will not limit any of Retina Radar’s rights or remedies. However, any provision that must survive in order to give proper effect to the intent and purpose of these Terms will survive termination.</p>

                        <li><b>End User’s Responsibilities.</b></li>
                        <p>You agree that you are the age of legal majority (generally 18 years of age) or older in your place of residence and possess the legal right and ability to agree to these Terms, and to use the Product in accordance with these Terms. You agree to ensure that anyone with authorized access to the Product will comply with these Terms.</p>
                        <p>You agree that you will not use the Product to transmit any communications or content of any type that infringe or violate the rights of another person or entity. </p>
                        <p>You agree that you will not use the Product for any purpose in violation of local, provincial, national, or international laws, rules, or treaties. You are responsible for compliance with local laws based on your location.</p>
                    
                        <li><b>Intellectual Property Rights.</b></li>
                        <p>You are not permitted (and you are not permitted to allow a third party to) sell, lease, modify, reproduce, reverse engineer, decompile, disassemble, transcribe, store in a retrieval system, translate into any language or computer language, retransmit in any form or by any means, sublicense, resell, or redistribute the Product or any part thereof without the prior written consent of Retina Radar. In addition to the foregoing, you are not permitted to publicly perform, or display, distribute, create derivative works, or exploit the Products or any part thereof in any way for any public or commercial purpose, or otherwise make the Product or any part thereof publicly available or available to any unauthorized person.  </p>
                        <p>Extraction of any images or other materials from the Product for your personal use or website is not allowed without written permission from Retina Radar.</p>
                    
                        <li><b>Limits on Liability.</b></li>
                        <p>WHEN PERMITTED BY LAW, YOU AGREE THAT RETINA RADAR OR ITS SUPPLIERS, WILL NOT BE RESPONSIBLE FOR ANY DAMAGE, LOSS, OR EXPENSE, WHETHER DIRECT, INDIRECT, LOST PROFITS, REVENUES, OR DATA, PERSONAL INJURY/WRONGFUL DEATH, FINANCIAL LOSSES , SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PRODUCT. YOU AGREE YOUR SOLE REMEDY IS TO STOP USING THE PRODUCT. </p>
                        <p>To the extent permitted by law, the total liability of Retina Radar and its suppliers, for any claims in connection with these Terms or the use of, misuse of, or inability to use the Product, is limited to the extent of actual damages incurred by you, not to exceed $1000.00 (USD).</p>
                        <p>In all cases, Retina Radar, and its suppliers, will not be liable for any loss or damage that is not reasonably foreseeable.</p>
                    
                        <li><b>Indemnity.</b></li>
                        <p>You agree to defend, indemnify, and hold the Retina Radar Team and those responsible for the product, including managers and any member, harmless from and against any claims, actions or demands, liabilities, and settlements, including without limitation, reasonable legal fees resulting from, or alleged to result from, your use or misuse of the Product.</p>

                        <li><b>Miscellaneous.</b></li>
                        <p>You expressly agree that exclusive jurisdiction for any dispute relating to your use of the Product resides in the province court in the Ontario governed by the laws of the Province of Ontario without respect to its conflict of laws principles. If any provision of these Terms is found to be invalid by any court having competent jurisdiction, the invalidity of that provision shall not affect the validity of the remaining provisions, which shall remain in full force. No waiver of any of these Terms shall be deemed a further or continuing waiver. </p>

                        <li><b>Contact Information.</b></li>
                        <p>If you have questions regarding these Terms you can contact our team at siyungcho@gmail.com</p>
                        <p>EFFECTIVE DATE: February 27, 2024 </p>
                    
                    </ol>
                </div>
            </section>
        </div>
        
        
    );
}

export default TERMS;