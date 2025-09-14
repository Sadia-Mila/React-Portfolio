import React from 'react'
import Image from '../Image'
import html from '/src/assets/html-5.png'
import css from '/src/assets/css-3.png'
import bootstrap from '/src/assets/bootstrap-5-logo-icon.png'
import tailwind from '/src/assets/tailwind-css-icon.png'
import js from '/src/assets/javaScript.png'
import jquery from '/src/assets/jquery1.png'
import react from '/src/assets/react.png'
import reactRouter from '/src/assets/reactRouter.png'
import reactRedux from '/src/assets/reactRedux.png'
import daisyui from '/src/assets/daisyui.png'
import node from '/src/assets/Node.js.png'
import photoshop from '/src/assets/photoshop.png'
import Heading from '../Heading'
const MySkills = () => {
  return (
    <section id="skills">
        <div className="py-12 bg-blue-100">
            <Heading
            text={"My Skills"}
            as={"h4"}
            className="font-semibold text-[44px] leading-18 tracking-wide text-center bg-gradient-to-r from-secondary to-tirtiary bg-clip-text text-transparent mb-8"
          />
               <div className="flex justify-center gap-x-5 gap-y-5 flex-wrap">
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={html} imgAlt={html}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">HTML-5</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={css} imgAlt={css}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">CSS-3</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={bootstrap} imgAlt={bootstrap}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Bootstrap-5</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={tailwind} imgAlt={tailwind}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Tailwind css</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={js} imgAlt={js}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Java Script</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={jquery} imgAlt={jquery}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Jquery</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={react} imgAlt={react}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">React</h1>
                    </div>
                    
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={reactRouter} imgAlt={reactRouter}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">React Router</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={reactRedux} imgAlt={reactRedux}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">React Redux</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={daisyui} imgAlt={daisyui}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Daisy Ui</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={node} imgAlt={node}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Node Js</h1>
                    </div>
                    <div className="w-[200px] h-[150px] p-5 justify-items-center bg-black/10 rounded-lg ">
                        <Image className="w-[80px] h-[70px]" imgSrc={photoshop} imgAlt={photoshop}/>
                        <h1 className="text-center text-xl text-black/50 mt-3">Photoshop</h1>
                    </div>
                  
                    {/* <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/css-3.png" alt="css-3.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">CSS-3</h1>
                    </div>
                    <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/bootstrap-5-logo-icon.png" alt="bootstrap-5-logo-icon.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">Bootstrap-5</h1>
                    </div>
                    <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/tailwind-css-icon.png" alt="tailwind-css-icon.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">Tailwind-css</h1>
                    </div>
                    <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/javaScript.png" alt="javaScript.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">Java Script</h1>
                    </div>
                    <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/react.png" alt="react.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">React</h1>
                    </div>
                    <div class="w-[200px] h-[150px] p-5 justify-items-center bg-base-300 ">
                        <img class="w-[80px] h-[70px] " src="src/assets/Node.js.png" alt="Node.js.png">
                        <h1 class="text-center font-poppins text-xl text-white mt-3">Node Js</h1>
                    </div> */}
                </div>
            
        </div>

    </section>
  )
}

export default MySkills