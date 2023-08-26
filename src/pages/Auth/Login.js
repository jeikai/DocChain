import React, { Fragment } from "react"
import { LayerBluer, LayerBluer2, facebook, google, apple } from "../../assets"
const Login = () => {
  return (
    <Fragment>
      <header className="bg-white">
        <div className="max-w-screen-xl py-3 mx-auto flex justify-between items-center">
          <div className="logo text-2xl font-bold">DocChain</div>
          <ul className="flex text-base gap-12">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex gap-5 items-center text-base">
            <span>Login</span>
            <button className="bg-pink font-bold text-white p-2 rounded-2xl">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <section className="h-[80vh] flex items-center justify-center">
        <div className="flex items-center text-white justify-between w-[70%]">
            <div className="relative">
                <h2 className="text-6xl font-semibold mb-6">Sign In to <br />DocChain</h2>
                <p>Don’t have an account? <a className="text-purple" href="">Register here!</a></p>
                <img className="absolute scale-150 top-1/4 left-1/3 -z-20 rounded-full" src={LayerBluer} alt="" />
                <img className="absolute scale-[2] -top-3/4 left-0 -z-10 rounded-full" src={LayerBluer2} alt="" />
            </div>
            <div>
                <form action="">
                    <ul className="flex gap-8 justify-center">
                        <li className="text-pink font-bold pb-1 border-b-2 boder-pink text-lg">Login</li>
                        <li className="font-bold pb-1 text-lg">Register</li>
                    </ul>
                    <div className="w-[430px]">
                        <div className="mt-12">
                            <input className="w-full p-4 rounded-lg" type="text" placeholder="Enter Email" />
                        </div>
                        <div className="mt-4">
                            <input className="w-full p-4 rounded-lg" type="text" placeholder="Enter Email" />
                        </div>
                        <a className="text-right w-full block mt-4" href="">Forgot password?</a>
                        <button className="w-full py-3 bg-pink rounded-lg mt-4">Sign in</button>
                    </div>
                    <div className="flex items-center justify-between my-12">
                        <div className="h-[1px] bg-gray-normal w-1/3"></div>
                        <div>Or continue with</div>
                        <div className="h-[1px] bg-gray-normal w-1/3"></div>
                    </div>
                </form>
                <div className="flex gap-4">
                    <button className="flex-1 bg-white p-3 flex items-center justify-center rounded-lg">
                        <img src={google} alt="" />
                    </button>
                    <button className="flex-1 bg-white p-3 flex items-center justify-center rounded-lg">
                        <img src={apple} alt="" />
                    </button>
                    <button className="flex-1 bg-white p-3 flex items-center justify-center rounded-lg">
                        <img src={facebook} alt="" />
                    </button>
                </div>
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
