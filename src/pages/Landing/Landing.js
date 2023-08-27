import React, { Fragment, useContext, useState } from 'react'
import { ImageHeader, ImageHeader2, ImageHeader3, ImageHeader4, LayerBluer, Phuc, Hai, Mai, Cuong, Duc } from '../../assets'
import { pink } from '@mui/material/colors'
import CheckIcon from '@mui/icons-material/Check'
import RestoreIcon from '@mui/icons-material/Restore'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { ConnectWallet, useAddress, useLogin } from '@thirdweb-dev/react'
import { PublicKeyContext } from '../../components/PublicKeyContext';
import { useNavigate } from 'react-router'
const Landing = () => {
  const { setPublicKey } = useContext(PublicKeyContext)
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log(input)
    setPublicKey(input)
    navigate('/view')
  }
  const handleDashboard = () => {
    navigate('/user')
  }
  return (
    <Fragment>
        <header className='bg-b2'>
          <div className="max-w-screen-xl py-3 mx-auto flex justify-between items-center">
            <div className='flex gap-20 items-center text-white'>
              <div className="logo text-2xl font-bold">DocChain</div>
              <ul className='flex text-base gap-12'>
                  <li><a href="">Product</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Company</a></li>
                  <li><a href="">Resources</a></li>
                  <li><a href="">Contact</a></li>
              </ul>
            </div>
            <div className='flex gap-5 items-center text-base'>
              <ConnectWallet
                theme="dark"
                btnTitle="Connect Wallet"
              />
            </div>
          </div>
        </header>
        <section className='bg-b2'>
          <div className="max-w-screen-xl mx-auto py-24 flex gap-12">
            <div className='flex-1 text-white'>
              <h1 className='text-3xl font-bold leading-10 tracking-wider'>
                  Revolutionizing Document Verification<br />
                  with DocChain:<br />
                  Secure, Swift, and Transparent
              </h1>
              <p className='my-8'>
              A specialized verification tool offering a Seamless, Secure, and Efficient solution for individuals and businesses  
              </p>
              <p className='text-xl cursor-pointer font-bold hover:text-blue-500 transition' onClick={handleDashboard}>Go to dashboard</p>
              <div className='h-[1px] bg-white'></div>
              <div className="search flex items-center my-8 px-4 bg-white rounded-full w-[493px] h-[68px]">
                <input className='flex-1 outline-none text-b1 px-2 bg-transparent' type="text" placeholder='Enter publicKey to view document' value={input}
                  onChange={(e) =>setInput(e.target.value)}
                />
                <button className='bg-b1 px-3 py-2 rounded-3xl' type='button' onClick={handleSubmit}>View Document</button>
              </div>
              <ul className='flex gap-6'>
                <li className='flex items-center gap-2'><CheckIcon sx={{ color: pink[500] }} /> Free trial</li>
                <li className='flex items-center gap-2'><CheckIcon sx={{ color: pink[500] }} /> No credit card required</li>
              </ul>
            </div>
            <div className='flex-1'>
              <div className='w-[537px] h-[433px] ml-auto relative'>
                <img className='w-full h-full' src={ImageHeader} alt="" />
                <img className='absolute w-[719px] h-[632px] object-cover top-0 -z-10 -left-1/4' src={ImageHeader2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='h-[257px] bg-b1 flex items-center justify-center'>
          <ul className='flex text-white w-3/4'>
            <li className='flex-1 px-6 py-2 border-r-2 border-indigo-500'>Flawless application <br />
                with a very good performance <br />
                has been achieved
            </li>
            <li className='flex-1 px-6 py-2 border-r-2 border-indigo-500 font-bold text-2xl'>
              3M <span className='block font-normal text-sm'>Global Users</span>
            </li>
            <li className='flex-1 px-6 py-2 border-r-2 border-indigo-500 font-bold text-2xl'>
              3M <span className='block font-normal text-sm'>Global Users</span>
            </li>
            <li className='flex-1 px-6 py-2 font-bold text-2xl'>
              3M <span className='block font-normal text-sm'>Global Users</span>
            </li>
          </ul>
        </section>
        <section className='bg-b2'>
          <div className="container max-w-screen-xl pt-24 m-auto">
            <h2 className='text-white text-center font-bold text-4xl'>See what our amazing features <br /> can do for you.</h2>
            <div className='py-12 flex items-center justify-center'>
              <ul className='flex gap-12'>
                <li className='text-white text-center'>
                  <div><RestoreIcon sx={{ color: pink[500], fontSize: 50 }} /></div>
                  <p className='font-bold text-lg my-2'>Realtime update</p>
                  <p className='text-gray-medium'>Get your verified state in <br /> real time</p>
                </li>
                <li className='text-white text-center'>
                  <div><PrivacyTipOutlinedIcon sx={{ color: pink[500], fontSize: 50 }} /></div>
                  <p className='font-bold text-lg my-2'>Secure and Confidential</p>
                  <p className='text-gray-medium'>Upload your <br /> documentations privately</p>
                </li>
                <li className='text-white text-center'>
                  <div><VisibilityOutlinedIcon sx={{ color: pink[500], fontSize: 50 }} /></div>
                  <p className='font-bold text-lg my-2'>Anonymous</p>
                  <p className='text-gray-medium'>No one knows you</p>
                </li>
                <li className='text-white text-center'>
                  <div><MemoryOutlinedIcon sx={{ color: pink[500], fontSize: 50 }} /></div>
                  <p className='font-bold text-lg my-2'>Easy and Intuitive</p>
                  <p className='text-gray-medium'>Easy to use and <br /> everyone can use it</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='bg-b2'>
          <div className="container max-w-screen-xl pt-24 m-auto flex gap-4">
            <div className='flex-1'>
              <h2 className='text-white font-semibold text-4xl leading-normal'>Upload your documentations <br />
                  anytime, anywhere and get <br />
                  notifications in real time <br />
              </h2>
              <p className='text-gray-medium my-6'>
              See list of your documentations, the verified states and <br />
              upload with a click
              </p>
              <ul>
                <li className='flex items-center gap-2 text-white text-sm mb-2'><CheckIcon sx={{ color: pink[500] }} /> Upload documentations</li>
                <li className='flex items-center gap-2 text-white text-sm mb-2'><CheckIcon sx={{ color: pink[500] }} /> Organize your documentations</li>
                <li className='flex items-center gap-2 text-white text-sm mb-2'><CheckIcon sx={{ color: pink[500] }} /> Organize your documentations</li>
              </ul>
            </div>
            <div className='flex-1'>
              <div className='w-[540px] h-[371px] ml-auto relative'>
                <img className='w-full h-full' src={ImageHeader3} alt="" />
                <img className='absolute scale-125 -top-1/4 left-0 -z-10' src={LayerBluer} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-b2'>
          <div className="container max-w-screen-xl pt-24 m-auto flex gap-4">
          <div className='flex-1'>
              <div className='w-[540px] h-[371px] mr-auto relative'>
                <img className='w-full h-full' src={ImageHeader4} alt="" />
                <img className='absolute scale-125 -top-1/4 left-0 -z-10' src={LayerBluer} alt="" />
              </div>
            </div>
            <div className='flex-1'>
              <h2 className='text-white font-semibold text-4xl leading-normal'>We use Blockchain to securely <br />
                  verify your documentations and <br />
                  track all others
              </h2>
              <p className='text-gray-medium my-6'>
                Easy to managed documentations, staffs will contact your for <br />
                needed information
              </p>
              <ul>
                <li className='flex items-center gap-2 text-white text-sm mb-2'><CheckIcon sx={{ color: pink[500] }} /> Secure</li>
                <li className='flex items-center gap-2 text-white text-sm mb-2'><CheckIcon sx={{ color: pink[500] }} /> Anonymous</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='bg-b2'>
          <div className="container max-w-screen-xl pt-24 m-auto">
            <h2 className='text-white text-center font-bold text-4xl'>
            Select the plan that best <br /> meets your needs.
            </h2>
            <div className='my-12 flex gap-24 items-center justify-center text-black'>
              <div className='w-[400px] rounded-lg py-12 bg-white text-center shadow-custom'>
                <h4 className='font-bold text-base mb-4'>Standard</h4>
                <p className='text-gray-medium text-xs mb-8'></p>
                <div className='flex items-center justify-center'>
                  <span className='font-bold text-4xl mr-3 relative'>
                    <div className='absolute -top-5 -left-3'><AttachMoneyOutlinedIcon sx={{ fontSize: 20 }} /></div>
                    15 /
                  </span>
                  <span className='font-medium text-sm'>Billed <br /> monthly</span>
                </div>
                <div className='text-center my-2 text-gray-dark'>Or</div>
                <div className='relative flex items-center justify-center'>
                  <span className='relative font-bold text-4xl mr-3'>
                    <div className='absolute -top-5 -left-3'><AttachMoneyOutlinedIcon sx={{ fontSize: 20 }} /></div>
                    150 /
                  </span>
                  <span className='font-medium text-sm'>Billed <br /> yearly</span>
                </div>
                <div className='text-center my-3 text-gray-dark text-sm'>20% saved</div>
                <div className='h-[1px] w-[80%] bg-b2 m-auto my-8'></div>
                <h5 className='w-[60%] text-left m-auto mb-4 text-xl font-semibold'>This plan includes:</h5>
                <ul className='w-[60%] m-auto'>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} /> 5 GB storage</li>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} /> 50,000 requests per month</li>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} /> Automatic Verification</li>
                </ul>
                <div className='px-8 mt-12'>
                  <button className='w-full bg-pink py-2 text-white font-semibold rounded-lg'>Get Started</button>
                </div>
              </div>
              <div className='w-[400px] rounded-lg py-12 bg-white text-center shadow-custom'>
                <h4 className='font-bold text-base mb-4'>Professional</h4>
                <p className='text-gray-medium text-xs mb-8'></p>
                <div className='flex items-center justify-center'>
                  <span className='font-bold text-4xl mr-3 relative'>
                    <div className='absolute -top-5 -left-3'><AttachMoneyOutlinedIcon sx={{ fontSize: 20 }} /></div>
                    25 /
                  </span>
                  <span className='font-medium text-sm'>Billed <br /> monthly</span>
                </div>
                <div className='text-center my-2 text-gray-dark'>Or</div>
                <div className='relative flex items-center justify-center'>
                  <span className='relative font-bold text-4xl mr-3'>
                    <div className='absolute -top-5 -left-3'><AttachMoneyOutlinedIcon sx={{ fontSize: 20 }} /></div>
                    270 /
                  </span>
                  <span className='font-medium text-sm'>Billed <br /> yearly</span>
                </div>
                <div className='text-center my-3 text-gray-dark text-sm'>10% saved</div>
                <div className='h-[1px] w-[80%] bg-b2 m-auto my-8'></div>
                <h5 className='w-[60%] text-left m-auto mb-4 text-xl font-semibold'>This plan includes:</h5>
                <ul className='w-[65%] m-auto'>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} /> 15 GB storage</li>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} /> 100,000 requests per month</li>
                  <li className='flex items-center gap-2 text-base font-semibold mb-2'><CheckIcon sx={{ color: pink[500] }} />Two-factor Verification</li>
                </ul>
                <div className='px-8 mt-12'>
                  <button className='w-full bg-pink py-2 text-white font-semibold rounded-lg'>Get Started</button>
                </div>
              </div>
            </div>
            <div className='text-center text-white'>No credit card required, start for free, pick a plan later. Cancel at any time</div>
          </div>
        </section>
        <section className='bg-b2 pb-12'>
          <div className="container max-w-screen-xl pt-24 m-auto">
            <h2 className='text-white text-center font-bold text-4xl'>
            Frequently asked questions
            </h2>
            <div className='text-center text-white mt-12'>
            We have put together some commonly asked questions
            </div>
            <div className='h-[1px] w-3/4 bg-pink m-auto my-12'></div>
            <div className='w-3/4 m-auto text-white text-lg'>How can I upload my documentations?</div>
            <div className='h-[1px] w-3/4 bg-pink m-auto my-12'></div>
            <div className='w-3/4 m-auto text-white text-lg'>Where and when I could get the verified state of my documentations?</div>
            <div className='h-[1px] w-3/4 bg-pink m-auto my-12'></div>
            <div className='w-3/4 m-auto text-white text-lg'>Who will verify my documentations</div>
            <div className='h-[1px] w-3/4 bg-pink m-auto my-12'></div>
            <div className='w-3/4 m-auto text-white text-base text-center border-[1px] border-indigo-600 rounded-lg py-1'>
              Didn’t find the answer you are looking for? <a className='text-purple' href="">Contact our support </a>
            </div>
          </div>
        </section>
        <section className='bg-b1 py-36'>
          <div className="container max-w-screen-xl mt-24 m-auto">
            <h2 className='text-white text-center font-bold text-4xl mb-12'>Get started with our platform <br />
                now and supercharge your <br />
                productivity.
            </h2>
            <div className='flex items-center justify-center gap-12'>
              <button className='w-fit px-4 py-2 text-white bg-pink rounded-full'>Get Start</button>
              <a className='text-white text-sm underline' href="">Request a demo</a>
            </div>
          </div>
        </section>
        <section className='bg-b2'>
          <div className="container max-w-screen-xl py-24 m-auto">
            <h2 className='text-white text-center font-bold text-4xl mb-12'>
              Fun Bug
            </h2>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
              <div className='w-[350px] h-[500px] relative rounded-2xl overflow-hidden'>
                <img className='w-full h-full brightness-75' src={Phuc} alt="" />
                <div className='absolute z-10 bottom-0 left-0 px-12 pb-6 w-full'>
                  <p className='font-semibold text-2xl text-white'>Phúc Trần</p>
                  <p className='text-white'>Backend Developer</p>
                </div>
              </div>
              <div className='w-[350px] h-[500px] relative rounded-2xl overflow-hidden'>
                <img className='w-full h-full brightness-75' src={Hai} alt="" />
                <div className='absolute z-10 bottom-0 left-0 px-12 pb-6 w-full'>
                  <p className='font-semibold text-2xl text-white'>Bùi Đức Hải</p>
                  <p className='text-white'>Designer</p>
                </div>
              </div>
              <div className='w-[350px] h-[500px] relative rounded-2xl overflow-hidden'>
                <img className='w-full h-full brightness-75' src={Mai} alt="" />
                <div className='absolute z-10 bottom-0 left-0 px-12 pb-6 w-full'>
                  <p className='font-semibold text-2xl text-white'>Mai Võ</p>
                  <p className='text-white'>Business Analyst</p>
                </div>
              </div>
              <div className='w-[350px] h-[500px] relative rounded-2xl overflow-hidden'>
                <img className='w-full h-full brightness-75 object-cover' src={Cuong} alt="" />
                <div className='absolute z-10 bottom-0 left-0 px-12 pb-6 w-full'>
                  <p className='font-semibold text-2xl text-white'>Đặng Cường</p>
                  <p className='text-white'>Full-Stack</p>
                </div>
              </div>
              <div className='w-[350px] h-[500px] relative rounded-2xl overflow-hidden'>
                <img className='w-full h-full brightness-75' src={Duc} alt="" />
                <div className='absolute z-10 bottom-0 left-0 px-12 pb-6 w-full'>
                  <p className='font-semibold text-2xl text-white'>Minh Đức</p>
                  <p className='text-white'>Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  )
}

export default Landing