// "use client"
// import { AnimatePresence, motion } from 'framer-motion'
// import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react'
// import { FaStar, FaCheckCircle, FaTimes } from 'react-icons/fa'
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
//       {!hasSubscribed && <AdulisProModal isOpen={isOpen} setIsOpen={setIsOpen} />}
//     </div>
//   )
// }

// const AdulisProModal = ({
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
//           className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-700 to-orange-500 bg-opacity-50 backdrop-blur-md overflow-hidden"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: '12.5deg', y: -100 }}
//             animate={{ scale: 1, rotate: '0deg', y: 0 }}
//             exit={{ scale: 0, rotate: '0deg', y: -100 }}
//             transition={{ duration: 0.5, ease: "anticipate" }}
//             className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md p-6"
//           >
//              {/* Glitter Effect */}
//             <div className="absolute inset-0 pointer-events-none">
//               <div
//                 className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500 opacity-20 animate-pulse mix-blend-overlay"
//               />
//               <div
//                 className="absolute top-0 left-0 w-full h-full bg-[url('/glitter.svg')] bg-repeat opacity-30 mix-blend-soft-light"
//               />
//             </div>

//             {/* Close Button */}
//             <button
//                 onClick={handleClose}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200 z-10"
//               >
//                 <FaTimes className="h-5 w-5" />
//             </button>

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="flex items-center justify-center mb-4">
//                 {!submissionSuccess ? (
//                   <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-md">
//                     <FaStar className="text-white h-6 w-6 animate-spin" />
//                   </div>
//                 ) : (
//                   <div className="bg-green-200 rounded-full p-3 shadow-md">
//                     <FaCheckCircle className="text-green-600 h-6 w-6" />
//                   </div>
//                 )}
//               </div>

//               {!submissionSuccess ? (
//                 <div>
//                   <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
//                     Adulis Pro is Coming!
//                   </h2>
//                   <p className="text-gray-700 text-center mb-6">
//                     Be the first to know when our premium subscription launches. Unlock exclusive features and elevate your experience.
//                   </p>
//                    {/* Email Input */}
//                   <div className="mb-4">
//                     <input
//                       type="email"
//                       placeholder="Your Email Address"
//                       value={email}
//                       onChange={handleEmailChange}
//                       className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-700 transition-shadow duration-200 ${
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
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className={`relative w-full py-3 px-6 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200 ${
//                       isSubmitting ? 'opacity-70 cursor-wait' : ''
//                     }`}
//                   >
//                      {isSubmitting ? 'Submitting...' : 'Notify Me!'}
//                      <div className="absolute top-0 left-0 w-full h-full rounded-md bg-white bg-opacity-20 z-0"/>
//                   </button>
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <h3 className="text-3xl font-bold text-green-600 mb-4">
//                     You're on the List!
//                   </h3>
//                   <p className="text-gray-700">
//                     We'll let you know as soon as Adulis Pro is launched. Get ready for an amazing experience!
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
import { FaStar, FaCheckCircle, FaTimes } from 'react-icons/fa'
import Cookies from 'js-cookie'
import ReCAPTCHA from 'react-google-recaptcha'

// Replace with your reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LetuMgqAAAAAJU5-EB0PVQigFETd66CtY95XcAS'

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAdulisProSubscribed, setHasAdulisProSubscribed] = useState(false); // Renamed and specific to Adulis Pro

  useEffect(() => {
    const adulisProSubscribed = Cookies.get('adulisProSubscribed'); // Specific cookie name
    if (adulisProSubscribed) {
      setHasAdulisProSubscribed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {!hasAdulisProSubscribed && <AdulisProModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

const AdulisProModal = ({
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

    Cookies.set('adulisProSubscribed', 'true', { expires: 365 }); // Specific cookie name
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-700 to-orange-500 bg-opacity-50 backdrop-blur-md overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg', y: -100 }}
            animate={{ scale: 1, rotate: '0deg', y: 0 }}
            exit={{ scale: 0, rotate: '0deg', y: -100 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md p-6"
          >
             {/* Glitter Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500 opacity-20 animate-pulse mix-blend-overlay"
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-[url('/glitter.svg')] bg-repeat opacity-30 mix-blend-soft-light"
              />
            </div>

            {/* Close Button */}
            <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200 z-10"
              >
                <FaTimes className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                {!submissionSuccess ? (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-md">
                    <FaStar className="text-white h-6 w-6 animate-spin" />
                  </div>
                ) : (
                  <div className="bg-green-200 rounded-full p-3 shadow-md">
                    <FaCheckCircle className="text-green-600 h-6 w-6" />
                  </div>
                )}
              </div>

              {!submissionSuccess ? (
                <div>
                  <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
                    Adulis Pro is Coming!
                  </h2>
                  <p className="text-gray-700 text-center mb-6">
                    Be the first to know when our premium subscription launches. Unlock exclusive features and elevate your experience.
                  </p>
                   {/* Email Input */}
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-700 transition-shadow duration-200 ${
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
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`relative w-full py-3 px-6 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                     {isSubmitting ? 'Submitting...' : 'Notify Me!'}
                     <div className="absolute top-0 left-0 w-full h-full rounded-md bg-white bg-opacity-20 z-0"/>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">
                    You're on the List!
                  </h3>
                  <p className="text-gray-700">
                    We'll let you know as soon as Adulis Pro is launched. Get ready for an amazing experience!
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