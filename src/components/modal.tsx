// "use client"
// import { AnimatePresence, motion } from 'framer-motion'
// import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react'
// import { FiMail } from 'react-icons/fi'
// import Cookies from 'js-cookie'
// import ReCAPTCHA from 'react-google-recaptcha'

// // Replace with your reCAPTCHA site key
// const RECAPTCHA_SITE_KEY = '6LetuMgqAAAAAJU5-EB0PVQigFETd66CtY95XcAS'

// const ExampleWrapper = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [hasSubscribed, setHasSubscribed] = useState(false)

//   useEffect(() => {
//     const subscribed = Cookies.get('subscribed')
//     if (subscribed) {
//       setHasSubscribed(true)
//       return
//     }

//     const timer = setTimeout(() => {
//       setIsOpen(true)
//     }, 5000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="">
//       {!hasSubscribed && <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />}
//     </div>
//   )
// }

// const SpringModal = ({
//   isOpen,
//   setIsOpen,
// }: {
//   isOpen: boolean
//   setIsOpen: Dispatch<SetStateAction<boolean>>
// }) => {
//   const [email, setEmail] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submissionSuccess, setSubmissionSuccess] = useState(false)
//   const [validationError, setValidationError] = useState('')
//   const [recaptchaToken, setRecaptchaToken] = useState(null)
//   const recaptchaRef = useRef(null)

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value)
//     setValidationError('')
//   }

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return emailRegex.test(email)
//   }

//   const handleRecaptchaChange = (value) => {
//     setRecaptchaToken(value)
//     setValidationError('')
//   }
//   const handleSubmit = async () => {
//     setValidationError('')

//     if (!email) {
//       setValidationError('Please enter your email.')
//       return
//     }

//     if (!isValidEmail(email)) {
//       setValidationError('Please enter a valid email address.')
//       return
//     }

//     setIsSubmitting(true)

//     // Explicitly execute reCAPTCHA before the API call
//     if (recaptchaRef.current) {
//       recaptchaRef.current.execute()
//     }

//     if (!recaptchaToken) {
//       setValidationError('Please verify that you are not a robot.')
//       setIsSubmitting(false)
//       return
//     }

//     // Simulate an API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     Cookies.set('subscribed', 'true', { expires: 365 })
//     setSubmissionSuccess(true)
//     setIsSubmitting(false)

//     setTimeout(() => {
//       setIsOpen(false)
//     }, 2500)
//   }

//   const handleAskLater = () => {
//     setIsOpen(false)
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: '12.5deg' }}
//             animate={{ scale: 1, rotate: '0deg' }}
//             exit={{ scale: 0, rotate: '0deg' }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white text-slate-900 p-6 rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
//           >
//             <FiMail className="text-slate-200 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
//             <div className="relative z-10">
//               <div className="bg-[#c1b174] w-16 h-16 mb-2 rounded-full text-3xl text-white grid place-items-center mx-auto">
//                 <FiMail />
//               </div>
//               {!submissionSuccess ? (
//                 <>
//                   <h3 className="text-2xl font-bold text-center mb-4">
//                     Join My Community
//                   </h3>
//                   <p className="text-center mb-6 text-gray-700">
//                     Connect with me through my newsletter, and receive exclusive
//                     content and updates.
//                   </p>
//                   <div className="mb-3">
//                     <input
//                       type="email"
//                       placeholder="Your Email Address"
//                       value={email}
//                       onChange={handleEmailChange}
//                       className={`w-full px-4 py-2 rounded-md bg-white text-gray-900 border ${
//                         validationError ? 'border-red-500' : 'border-gray-300'
//                       } focus:border-[#c1b100] focus:outline-none`}
//                     />
//                     {validationError && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {validationError}
//                       </p>
//                     )}
//                   </div>
//                   <div className="mb-4">
//                     <ReCAPTCHA
//                       ref={recaptchaRef}
//                       sitekey={RECAPTCHA_SITE_KEY}
//                       onChange={handleRecaptchaChange}
//                       className="mb-2"
//                       size="invisible"
//                       badge="inline"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={handleAskLater}
//                       className="bg-transparent hover:bg-slate-100 transition-colors text-slate-700 font-semibold w-full py-2 rounded"
//                     >
//                       Ask me later
//                     </button>
//                     <button
//                       onClick={handleSubmit}
//                       disabled={isSubmitting}
//                       className={`bg-[#c1b174] hover:bg-[#c1b100] transition-opacity text-white font-semibold w-full py-2 rounded ${
//                         isSubmitting ? 'opacity-70 cursor-wait' : ''
//                       }`}
//                     >
//                       {isSubmitting ? 'Submitting...' : 'Subscribe'}
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-center">
//                   <h3 className="text-3xl font-bold text-green-600 mb-4">
//                     🎉 Thank You!
//                   </h3>
//                   <p className="text-slate-700">
//                     You have successfully subscribed to our newsletter.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default ExampleWrapper
// "use client"
// import { AnimatePresence, motion } from 'framer-motion'
// import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react'
// import { FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa'
// import Cookies from 'js-cookie'
// import ReCAPTCHA from 'react-google-recaptcha'

// // Replace with your reCAPTCHA site key
// const RECAPTCHA_SITE_KEY = '6LetuMgqAAAAAJU5-EB0PVQigFETd66CtY95XcAS'

// const ExampleWrapper = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [hasSubscribed, setHasSubscribed] = useState(false)

//   useEffect(() => {
//     const subscribed = Cookies.get('subscribed')
//     if (subscribed) {
//       setHasSubscribed(true)
//       return
//     }

//     const timer = setTimeout(() => {
//       setIsOpen(true)
//     }, 5000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="">
//       {!hasSubscribed && <ModernModal isOpen={isOpen} setIsOpen={setIsOpen} />}
//     </div>
//   )
// }

// const ModernModal = ({
//   isOpen,
//   setIsOpen,
// }: {
//   isOpen: boolean
//   setIsOpen: Dispatch<SetStateAction<boolean>>
// }) => {
//   const [email, setEmail] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submissionSuccess, setSubmissionSuccess] = useState(false)
//   const [validationError, setValidationError] = useState('')
//   const [recaptchaToken, setRecaptchaToken] = useState(null)
//   const recaptchaRef = useRef(null)

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value)
//     setValidationError('')
//   }

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return emailRegex.test(email)
//   }

//   const handleRecaptchaChange = (value) => {
//     setRecaptchaToken(value)
//     setValidationError('')
//   }

//   const handleSubmit = async () => {
//     setValidationError('')

//     if (!email) {
//       setValidationError('Please enter your email.')
//       return
//     }

//     if (!isValidEmail(email)) {
//       setValidationError('Please enter a valid email address.')
//       return
//     }

//     setIsSubmitting(true)

//     // Explicitly execute reCAPTCHA before the API call
//     if (recaptchaRef.current) {
//       recaptchaRef.current.execute()
//     }

//     if (!recaptchaToken) {
//       setValidationError('Please verify that you are not a robot.')
//       setIsSubmitting(false)
//       return
//     }

//     // Simulate an API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     Cookies.set('subscribed', 'true', { expires: 365 })
//     setSubmissionSuccess(true)
//     setIsSubmitting(false)

//     setTimeout(() => {
//       setIsOpen(false)
//     }, 2500)
//   }

//   const handleClose = () => {
//     setIsOpen(false);
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
//         >
//           <motion.div
//             initial={{ scale: 0.8, y: -50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: -50 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md"
//           >
//             <div className="relative py-6 px-8">
//               {/* Close Button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
//               >
//                 <FaTimes className="h-5 w-5" />
//               </button>

//               {/* Header/Icon */}
//               <div className="flex items-center justify-center mb-4">
//                 {!submissionSuccess ? (
//                   <div className="bg-indigo-100 rounded-full p-3">
//                     <FaPaperPlane className="text-indigo-600 h-6 w-6" />
//                   </div>
//                 ) : (
//                   <div className="bg-green-100 rounded-full p-3">
//                     <FaCheckCircle className="text-green-600 h-6 w-6" />
//                   </div>
//                 )}
//               </div>

//               {/* Content */}
//               {!submissionSuccess ? (
//                 <div>
//                   <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
//                     Exclusive Content Awaits!
//                   </h2>
//                   <p className="text-gray-600 text-center mb-4">
//                     Unlock exclusive content and stay updated with our latest news
//                     by joining our newsletter.
//                   </p>
//                   {/* Email Input */}
//                   <div className="mb-4">
//                     <input
//                       type="email"
//                       placeholder="Your Email Address"
//                       value={email}
//                       onChange={handleEmailChange}
//                       className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700 transition-shadow duration-200 ${
//                         validationError ? 'border-red-500' : ''
//                       }`}
//                     />
//                     {validationError && (
//                       <p className="text-red-500 text-sm mt-1">{validationError}</p>
//                     )}
//                   </div>

//                   {/* reCAPTCHA */}
//                   <div className="mb-4">
//                     <ReCAPTCHA
//                       ref={recaptchaRef}
//                       sitekey={RECAPTCHA_SITE_KEY}
//                       onChange={handleRecaptchaChange}
//                       className="mb-2"
//                       size="invisible"
//                       badge="inline"
//                     />
//                   </div>

//                   {/* Subscribe Button */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className={`w-full py-3 px-6 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200 ${
//                       isSubmitting ? 'opacity-70 cursor-wait' : ''
//                     }`}
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
//                   </button>
//                 </div>
//               ) : (
//                 // Success State
//                 <div className="text-center">
//                   <h3 className="text-3xl font-bold text-green-600 mb-4">
//                     Subscription Confirmed!
//                   </h3>
//                   <p className="text-gray-700">
//                     You're all set to receive exciting updates from us.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ExampleWrapper;
"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react'
import { FaPalette, FaCheckCircle, FaTimes } from 'react-icons/fa'
import Cookies from 'js-cookie'
import ReCAPTCHA from 'react-google-recaptcha'

// Replace with your reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LetuMgqAAAAAJU5-EB0PVQigFETd66CtY95XcAS'

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSubscribed, setHasSubscribed] = useState(false)

  useEffect(() => {
    const subscribed = Cookies.get('subscribed')
    if (subscribed) {
      setHasSubscribed(true)
      return
    }

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="">
      {!hasSubscribed && <ArtModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

const ArtModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [validationError, setValidationError] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const recaptchaRef = useRef(null)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setValidationError('')
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value)
    setValidationError('')
  }

  const handleSubmit = async () => {
    setValidationError('')

    if (!email) {
      setValidationError('Please enter your email.')
      return
    }

    if (!isValidEmail(email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Explicitly execute reCAPTCHA before the API call
    if (recaptchaRef.current) {
      recaptchaRef.current.execute()
    }

    if (!recaptchaToken) {
      setValidationError('Please verify that you are not a robot.')
      setIsSubmitting(false)
      return
    }

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    Cookies.set('subscribed', 'true', { expires: 365 })
    setSubmissionSuccess(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setIsOpen(false)
    }, 2500)
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-md"
          >
            <div className="relative py-6 px-8">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              {/* Header/Icon */}
              <div className="flex items-center justify-center mb-4">
                {!submissionSuccess ? (
                  <div className="bg-orange-100 rounded-full p-3">
                    <FaPalette className="text-orange-500 h-6 w-6" />
                  </div>
                ) : (
                  <div className="bg-green-100 rounded-full p-3">
                    <FaCheckCircle className="text-green-500 h-6 w-6" />
                  </div>
                )}
              </div>

              {/* Content */}
              {!submissionSuccess ? (
                <div>
                  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                    Unlock Exclusive Art!
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    Stay inspired and get exclusive access to new art prints by joining our newsletter.
                  </p>
                  {/* Email Input */}
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-700 transition-shadow duration-200 ${
                        validationError ? 'border-red-500' : ''
                      }`}
                    />
                    {validationError && (
                      <p className="text-red-500 text-sm mt-1">{validationError}</p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="mb-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                      className="mb-2"
                      size="invisible"
                      badge="inline"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Get Inspired!'}
                  </button>
                </div>
              ) : (
                // Success State
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-500 mb-4">
                    Welcome to the Collection!
                  </h3>
                  <p className="text-gray-700">
                    You're now subscribed and ready to discover stunning new art prints.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;