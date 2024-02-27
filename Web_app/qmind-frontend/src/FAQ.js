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
    
        </div>
        
        
    );
}

export default FAQ;