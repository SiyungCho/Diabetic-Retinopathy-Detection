import './faq.css';
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import karim_headshot from './team_headshots/karim-headshot.jpg'
import ali_headshot from './team_headshots/ali-headshot.png'
import aimee_headshot from './team_headshots/aimee-headshot.jpg'
import ola_headshot from './team_headshots/ola-headshot.jpg'
import siyung_headshot from './team_headshots/siyung_headshot.png'
import custom_model from './architecture_images/custom_model.png'
import inception_v3 from './architecture_images/inception_model.png'
import resnet_50 from './architecture_images/resnet_model.png'
import resnet_plot from './architecture_images/resnet_graph.png'
import inception_plot from './architecture_images/inception_graph.png'
import custom_plot from './architecture_images/custom_graph.png'

const FAQ = () => {
    const [isTextBoxVisible1, setTextBoxVisible1] = useState(true);
    const [isTextBoxVisible2, setTextBoxVisible2] = useState(true);
    const [isTextBoxVisible3, setTextBoxVisible3] = useState(true);

    const toggleTextBox1 = () => {
        setTextBoxVisible1(!isTextBoxVisible1);
      };

    const toggleTextBox2 = () => {
        setTextBoxVisible2(!isTextBoxVisible2);
      };
    
    const toggleTextBox3 = () => {
        setTextBoxVisible3(!isTextBoxVisible3);
      };

    const handleBubbleClick = (url) => {
        window.open(url, "_blank");
    };
    
    return (
        <div className="faq-page">
            <header className="header">
                <Link to="/"><nav className="logo">Home</nav></Link>
                <nav className="nav">
                    <Link to="/faq">FAQ</Link>
                </nav>
            </header>

            
            <section className="static-content">

                <button className="toggle-button-faq button-color1" onClick={toggleTextBox1}>
                {isTextBoxVisible1 ? 'Custom Model' : 'Custom Model'}
                </button>
                {isTextBoxVisible1 && (
                <div className={`text-box-faq ${isTextBoxVisible1 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#f0f2f5', borderLeftColor : '#A462C7', borderLeftWidth: '5px', borderLeftStyle: 'solid'  }}>
                    <div className="subsection">
                    <h2>Custom CNN</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>Amet luctus venenatis lectus magna fringilla. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Risus commodo viverra maecenas accumsan lacus vel facilisis. Adipiscing bibendum est ultricies integer quis auctor elit sed. Ac odio tempor orci dapibus ultrices in iaculis nunc. Rutrum tellus pellentesque eu tincidunt tortor. Dictum sit amet justo donec enim diam vulputate. Ultrices sagittis orci a scelerisque purus. Rhoncus aenean vel elit scelerisque mauris. Vel pretium lectus quam id leo. Ut tristique et egestas quis ipsum suspendisse ultrices. Sed ullamcorper morbi tincidunt ornare massa. Nulla facilisi morbi tempus iaculis urna. Porttitor leo a diam sollicitudin tempor. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Lectus proin nibh nisl condimentum id. Lacinia quis vel eros donec ac.</p>
                            <p>Eget nunc lobortis mattis aliquam. Ut placerat orci nulla pellentesque dignissim enim sit. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Tellus cras adipiscing enim eu. Viverra justo nec ultrices dui sapien eget mi proin sed. Egestas fringilla phasellus faucibus scelerisque eleifend. Vestibulum lorem sed risus ultricies tristique nulla. Enim neque volutpat ac tincidunt vitae semper. Sed odio morbi quis commodo. Lobortis feugiat vivamus at augue.</p>
                        </div>
                        <div className='model_images'>
                            <img src={custom_model} alt="Inception V3" className='model_image'/>
                            <img src={custom_plot} alt="Custom Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                <button className="toggle-button-faq button-color2" onClick={toggleTextBox2} >
                {isTextBoxVisible2 ? 'Inception V3' : 'Inception V3'}
                </button>
                {isTextBoxVisible2 && (
                <div className={`text-box-faq ${isTextBoxVisible2 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#e6e8eb', borderLeftColor : '#4266E8', borderLeftWidth: '5px', borderLeftStyle: 'solid' }}>
                    <div className="subsection" style={{ backgroundColor: '#e6e8eb' }}>
                    <h2>Inception V3</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>Amet luctus venenatis lectus magna fringilla. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Risus commodo viverra maecenas accumsan lacus vel facilisis. Adipiscing bibendum est ultricies integer quis auctor elit sed. Ac odio tempor orci dapibus ultrices in iaculis nunc. Rutrum tellus pellentesque eu tincidunt tortor. Dictum sit amet justo donec enim diam vulputate. Ultrices sagittis orci a scelerisque purus. Rhoncus aenean vel elit scelerisque mauris. Vel pretium lectus quam id leo. Ut tristique et egestas quis ipsum suspendisse ultrices. Sed ullamcorper morbi tincidunt ornare massa. Nulla facilisi morbi tempus iaculis urna. Porttitor leo a diam sollicitudin tempor. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Lectus proin nibh nisl condimentum id. Lacinia quis vel eros donec ac.</p>
                            <p>Eget nunc lobortis mattis aliquam. Ut placerat orci nulla pellentesque dignissim enim sit. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Tellus cras adipiscing enim eu. Viverra justo nec ultrices dui sapien eget mi proin sed. Egestas fringilla phasellus faucibus scelerisque eleifend. Vestibulum lorem sed risus ultricies tristique nulla. Enim neque volutpat ac tincidunt vitae semper. Sed odio morbi quis commodo. Lobortis feugiat vivamus at augue.</p>
                        </div>
                        <div className='model_images'>
                            <img src={inception_v3} alt="Inception V3" className='model_image'/>
                            <img src={inception_plot} alt="Inception Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                <button className="toggle-button-faq button-color3" onClick={toggleTextBox3}>
                {isTextBoxVisible3 ? 'Resnet 50' : 'Resnet 50'}
                </button>
                {isTextBoxVisible3 && (
                <div className={`text-box-faq ${isTextBoxVisible3 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#dcdfe3', borderLeftColor : '#FCA311', borderLeftWidth: '5px', borderLeftStyle: 'solid' }}>
                    <div className="subsection" style={{ backgroundColor: '#dcdfe3' }}>
                    <h2>Resnet 50</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>Vitae suscipit tellus mauris a diam maecenas sed enim. Nullam vehicula ipsum a arcu. Cursus risus at ultrices mi tempus imperdiet nulla. Accumsan sit amet nulla facilisi morbi. Nunc consequat interdum varius sit. Eu mi bibendum neque egestas. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Quis varius quam quisque id diam. Fermentum dui faucibus in ornare quam viverra. Fames ac turpis egestas integer. Et molestie ac feugiat sed lectus vestibulum mattis. Viverra nibh cras pulvinar mattis nunc sed blandit. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Dictum varius duis at consectetur lorem donec massa sapien. Est placerat in egestas erat imperdiet. Nisl nunc mi ipsum faucibus vitae. Quis vel eros donec ac odio tempor. Vitae elementum curabitur vitae nunc.</p>
                            <p>Tortor id aliquet lectus proin nibh nisl condimentum. Tristique nulla aliquet enim tortor at auctor. Eros in cursus turpis massa tincidunt dui ut. Diam maecenas sed enim ut sem. Sodales ut eu sem integer vitae justo eget. Est ullamcorper eget nulla facilisi etiam dignissim diam. Felis bibendum ut tristique et egestas. Nec ultrices dui sapien eget mi proin sed libero. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Arcu ac tortor dignissim convallis aenean et. Nec nam aliquam sem et tortor. Sagittis id consectetur purus ut faucibus pulvinar. Purus in mollis nunc sed id semper risus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Tellus mauris a diam maecenas. Sed arcu non odio euismod lacinia at quis.</p>
                        </div>
                        <div className='model_images'>
                            <img src={resnet_50} alt="Resnet 50" className='model_image'/>
                            <img src={resnet_plot} alt="Resnet Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}
             
            </section>

            <section className="meet-the-team">
                <h2>Meet the Team</h2>
                <div className="team-bubbles" id="bottom">
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/siyung-cho-04b046207/')}>
                        <p className="bubble-text">Project Manager</p>
                        <div className="bubble-image">
                            <img src={siyung_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Frank Siyung Cho</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/ola-elmaghraby-4b891221a')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={ola_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Ola Elmaghraby</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/ali-zidan-36b07b205/')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={ali_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Ali Zidan</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('http://linkedin.com/in/aimeelangevin')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={aimee_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Aimee Langevin</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/karim-ali-960a0927b/')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={karim_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Karim Ali</p>
                    </div>
                </div>
            </section>
            
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

export default FAQ;