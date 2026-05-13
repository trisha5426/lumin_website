// import React, { useState } from 'react';
// import {  useLocation } from 'react-router-dom';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = () => {

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const courseId = queryParams.get('courseId');
//   const title = queryParams.get('title');

//   const [paymentData, setpaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//     courseId: courseId,
//     courseName: title,
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setpaymentData({ ...paymentData, [name]: value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const formData = new FormData();
//       formData.append('entry.2045910219', paymentData.email); // Replace entry id with actual field id
//       formData.append('entry.119183208', paymentData.mobile);
//       formData.append('entry.1418791824', paymentData.transactionId);
//       formData.append('entry.1980892240', paymentData.courseId);
//       formData.append('entry.1020108503', paymentData.courseName);

//       // Make POST request to Google Form endpoint
//       const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
//         },
//       });
//       if (response.ok) {
//         setSuccess('Payment submitted successfully!');
//         setTimeout(() => {
//           alert('Payment submitted successfully!');
//         }, 2000);
//       } else {
//         setError('Error submitting payment');
//       }
//     } catch (error) {
//       setError(error.message || 'Error submitting payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("Course ID:", paymentData.courseId); // Check courseId in console
//   console.log("Title:", paymentData.courseName); 
//   return (
//     <div className="container">
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       {success && <div className="text-green-500 mb-4">{success}</div>}
//       <div className="payment-section">
//         <img src={qrcode} alt="QR Code" className="qr-code" />
//         <p>OR</p>
//         <p className="upi-id">UPI ID: lumin.co.in@axl</p>
//         <p className="instructions">
//           Scan the QR code or pay the required amount on the given UPI ID.
//           <br />
//           After paying, fill out the details in the form provided.
//           <br />
//           You will be given access to course material through your email ID that you have filled in the form.
//           <br />
//           The confirmation will be done within 2 hours.
//         </p>
//       </div>
//       <div className="form-section">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             value={paymentData.email}
//             required
//           />
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile No."
//             onChange={handleChange}
//             value={paymentData.mobile}
//             required
//           />
//           <input
//             type="text"
//             name="transactionId"
//             placeholder="Last 5 digits of Transaction ID"
//             onChange={handleChange}
//             value={paymentData.transactionId}
//             required
//           />
//           <input
//             type="text"
//             name="courseId"
//             value={paymentData?.courseId}
//             onChange={handleChange}
//             disabled
//           />
//           <input
//             type="text"
//             name="courseName"
//             value={paymentData?.courseName}
//             onChange={handleChange}
//             disabled
//           />
//           <button
//             type="submit"
//             className="mt-4 w-30 bg-blue-500 text-white py-2 px-4 rounded-md cta-btn"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
//----------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = ({ courseId, title, onClose }) => {
//   const [paymentData, setPaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//     courseId: courseId,
//     courseName: title,
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData({ ...paymentData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const formData = new FormData();
//       formData.append('entry.2045910219', paymentData.email);
//       formData.append('entry.119183208', paymentData.mobile);
//       formData.append('entry.1418791824', paymentData.transactionId);
//       formData.append('entry.1980892240', paymentData.courseId);
//       formData.append('entry.1020108503', paymentData.courseName);

//       await fetch(
//         'https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse',
//         { method: 'POST', body: formData }
//       );

//       setSuccess('Payment submitted successfully!');
//       setTimeout(() => {
//         alert('Payment submitted! You will receive access within 2 hours.');
//         onClose();
//       }, 1500);

//     } catch (err) {
//       setError('Error submitting. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     /* Backdrop — clicking outside closes the modal */
//     <div className="modal-backdrop" onClick={onClose}>

//       {/* Modal box — clicking inside does NOT close it */}
//       <div className="modal-box" onClick={(e) => e.stopPropagation()}>

//         {/* Close button */}
//         <button className="modal-close-btn" onClick={onClose}>✕</button>

//         {/* LEFT: QR + instructions */}
//         <div className="modal-left">
//           <img src={qrcode} alt="QR Code" className="modal-qr" />
//           <p className="modal-or">OR</p>
//           <p className="modal-upi">UPI ID: lumin.co.in@axl</p>
//           <p className="modal-instructions">
//             Scan the QR code or pay the required amount on the given UPI ID.<br />
//             After paying, fill out the details in the form provided.<br />
//             You will be given access to course material through your email ID
//             that you have filled in the form.<br />
//             The confirmation will be done within 2 hours.
//           </p>
//         </div>

//         {/* RIGHT: Course details + form */}
//         <div className="modal-right">
//           <div className="modal-course-header">
//             <span className="modal-header-label">Course Details</span>
//             <span className="modal-header-price-label">Price</span>
//           </div>
//           <div className="modal-course-row">
//             <span className="modal-course-name">{title}</span>
//             <span className="modal-course-price">₹299</span>
//           </div>

//           {error && <p className="modal-error">{error}</p>}
//           {success && <p className="modal-success">{success}</p>}

//           <form onSubmit={handleSubmit} className="modal-form">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//               value={paymentData.email}
//               required
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile No."
//               onChange={handleChange}
//               value={paymentData.mobile}
//               required
//             />
//             <input
//               type="text"
//               name="transactionId"
//               placeholder="Last 5 digits of Transaction ID"
//               onChange={handleChange}
//               value={paymentData.transactionId}
//               required
//             />
//             <input
//               type="text"
//               value={paymentData.courseId}
//               disabled
//             />
//             <input
//               type="text"
//               value={paymentData.courseName}
//               disabled
//             />
//             <button type="submit" className="buy-btn" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PaymentForm;

//---------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = ({ courseId, title, onClose }) => {
//   const [paymentData, setPaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//     courseId: courseId,
//     courseName: title,
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData({ ...paymentData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append('entry.2045910219', paymentData.email);
//     formData.append('entry.119183208', paymentData.mobile);
//     formData.append('entry.1418791824', paymentData.transactionId);
//     formData.append('entry.1980892240', paymentData.courseId);
//     formData.append('entry.1020108503', paymentData.courseName);

//     try {
//       // Google Forms always throws CORS error — but data IS saved.
//       // We use no-cors mode so it doesn't crash, then always show success.
//       await fetch(
//         'https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse',
//         { method: 'POST', body: formData, mode: 'no-cors' }
//       );
//     } catch (err) {
//       // Ignore — data was still submitted to Google
//     } finally {
//       setLoading(false);
//       setSubmitted(true); // Always show success
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="modal-backdrop" onClick={onClose}>
//         <div className="modal-box modal-success-box" onClick={(e) => e.stopPropagation()}>
//           <button className="modal-close-btn" onClick={onClose}>✕</button>
//           <div className="modal-success-content">
//             <div className="modal-success-icon">✓</div>
//             <h2>Payment Details Received!</h2>
//             <p>You will receive access to <strong>{title}</strong> on your email within 2 hours.</p>
//             <button className="buy-btn" style={{ marginTop: '1.5rem' }} onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-box" onClick={(e) => e.stopPropagation()}>

//         <button className="modal-close-btn" onClick={onClose}>✕</button>

//         {/* LEFT: QR + instructions */}
//         <div className="modal-left">
//           <img src={qrcode} alt="QR Code" className="modal-qr" />
//           <p className="modal-or">OR</p>
//           <p className="modal-upi">UPI ID: lumin.co.in@axl</p>
//           <p className="modal-instructions">
//             Scan the QR code or pay the required amount on the given UPI ID.<br />
//             After paying, fill out the details in the form provided.<br />
//             You will be given access to course material through your email ID
//             that you have filled in the form.<br />
//             The confirmation will be done within 2 hours.
//           </p>
//         </div>

//         {/* RIGHT: Form */}
//         <div className="modal-right">
//           <div className="modal-course-header">
//             <span>Course Details</span>
//             <span>Price</span>
//           </div>
//           <div className="modal-course-row">
//             <span className="modal-course-name">{title}</span>
//             <span className="modal-course-price">₹299</span>
//           </div>

//           <form className="modal-form" onSubmit={handleSubmit}>
//             <input
//               type="email" name="email" placeholder="Email Address"
//               onChange={handleChange} value={paymentData.email} required
//             />
//             <input
//               type="tel" name="mobile" placeholder="Mobile No."
//               onChange={handleChange} value={paymentData.mobile} required
//             />
//             <input
//               type="text" name="transactionId" placeholder="Last 5 digits of Transaction ID"
//               onChange={handleChange} value={paymentData.transactionId} required
//             />
//             <input type="text" value={paymentData.courseId} disabled />
//             <input type="text" value={paymentData.courseName} disabled />

//             <button type="submit" className="buy-btn" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PaymentForm;

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = ({ courseId, title, onClose }) => {
//   const [paymentData, setPaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//     courseId: courseId,
//     courseName: title,
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData({ ...paymentData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const formData = new FormData();
//       formData.append('entry.2045910219', paymentData.email);
//       formData.append('entry.119183208', paymentData.mobile);
//       formData.append('entry.1418791824', paymentData.transactionId);
//       formData.append('entry.1980892240', paymentData.courseId);
//       formData.append('entry.1020108503', paymentData.courseName);

//       // Google Forms blocks CORS so we use no-cors — submission still goes through
//       await fetch(
//         'https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse',
//         {
//           method: 'POST',
//           mode: 'no-cors',   // ← key fix: Google Forms requires this
//           body: formData,
//         }
//       );

//       // With no-cors we can't read response.ok, so we assume success if no error thrown
//       setSuccess('Submitted! You will receive access within 2 hours.');
//       setTimeout(() => onClose(), 3000);

//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-box" onClick={(e) => e.stopPropagation()}>

//         {/* Close button */}
//         <button className="modal-close-btn" onClick={onClose}>✕</button>

//         {/* LEFT: QR + instructions */}
//         <div className="modal-left">
//           <img src={qrcode} alt="QR Code" className="modal-qr" />
//           <p className="modal-or">OR</p>
//           <p className="modal-upi">UPI ID: lumin.co.in@axl</p>
//           <p className="modal-instructions">
//             Scan the QR code or pay the required amount on the given UPI ID.<br />
//             After paying, fill in the form on the right.<br />
//             You will receive course access on your email within 2 hours.
//           </p>
//         </div>

//         {/* RIGHT: Form */}
//         <div className="modal-right">
//           <div className="modal-course-header">
//             <span>Course Details</span>
//             <span>Price</span>
//           </div>
//           <div className="modal-course-row">
//             <span className="modal-course-name-text">{title}</span>
//             <span className="modal-course-price">₹299</span>
//           </div>

//           {error && <p className="modal-error">{error}</p>}
//           {success && <p className="modal-success">{success}</p>}

//           <form className="modal-form" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//               value={paymentData.email}
//               required
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile No."
//               onChange={handleChange}
//               value={paymentData.mobile}
//               required
//             />
//             <input
//               type="text"
//               name="transactionId"
//               placeholder="Last 5 digits of Transaction ID"
//               onChange={handleChange}
//               value={paymentData.transactionId}
//               required
//             />
//             <input
//               type="text"
//               value={paymentData.courseId}
//               readOnly
//               placeholder="Course ID"
//             />
//             <input
//               type="text"
//               value={paymentData.courseName}
//               readOnly
//               placeholder="Course Name"
//             />
//             <button type="submit" className="buy-btn" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PaymentForm;

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = ({ courseId, title, onClose }) => {
//   const [paymentData, setPaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');
//     try {
//       const formData = new FormData();
//       // ⚠️ REPLACE these entry IDs with the ones you find in Step 1
//       formData.append('entry.2045910219', paymentData.email);
//       formData.append('entry.119183208', paymentData.mobile);
//       formData.append('entry.1418791824', paymentData.transactionId);
//       formData.append('entry.1980892240', courseId);
//       formData.append('entry.1020108503', title);

//       await fetch(
//         'https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse',
//         { method: 'POST', mode: 'no-cors', body: formData }
//       );
//       setSuccess('Submitted! You will receive access within 2 hours.');
//       setTimeout(() => onClose(), 3000);
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0, left: 0,
//         width: '100vw',
//         height: '100vh',
//         background: 'rgba(0,0,0,0.55)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 99999,
//       }}
//       onClick={onClose}
//     >
//       <div
//         style={{
//           background: '#fff',
//           borderRadius: '12px',
//           padding: '2rem',
//           display: 'flex',
//           gap: '2rem',
//           maxWidth: '720px',
//           width: '90%',
//           position: 'relative',
//           maxHeight: '90vh',
//           overflowY: 'auto',
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* X button */}
//         <button
//           onClick={onClose}
//           style={{
//             position: 'absolute', top: '1rem', right: '1rem',
//             background: 'none', border: 'none',
//             fontSize: '1.4rem', cursor: 'pointer', color: '#555',
//             zIndex: 1,
//           }}
//         >✕</button>

//         {/* LEFT: QR */}
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', paddingTop: '1rem' }}>
//           <img src={qrcode} alt="QR Code" style={{ width: '160px', height: '160px', objectFit: 'contain' }} />
//           <p style={{ fontWeight: 'bold' }}>OR</p>
//           <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>UPI ID: lumin.co.in@axl</p>
//           <p style={{ color: 'red', fontSize: '0.78rem', textAlign: 'center', lineHeight: '1.6' }}>
//             Scan the QR code or pay the required amount on the given UPI ID.<br />
//             After paying, fill out the details in the form provided.<br />
//             You will be given access to course material through your email ID that you have filled in the form.<br />
//             The confirmation will be done within 2 hours.
//           </p>
//         </div>

//         {/* Divider */}
//         <div style={{ width: '1px', background: '#ddd', alignSelf: 'stretch' }} />

//         {/* RIGHT: Form */}
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#2d7a4f', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
//             <span>Course Details</span>
//             <span>Price</span>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
//             <span>{title}</span>
//             <span style={{ fontWeight: '700', color: '#2d7a4f' }}>₹299</span>
//           </div>

//           {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}
//           {success && <p style={{ color: 'green', fontSize: '0.85rem' }}>{success}</p>}

//           <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//             <input
//               type="email" name="email" placeholder="Email Address"
//               onChange={handleChange} value={paymentData.email} required
//               style={{ border: 'none', borderBottom: '1px solid #999', padding: '0.4rem 0', outline: 'none', fontSize: '0.9rem', width: '100%' }}
//             />
//             <input
//               type="tel" name="mobile" placeholder="Mobile No."
//               onChange={handleChange} value={paymentData.mobile} required
//               style={{ border: 'none', borderBottom: '1px solid #999', padding: '0.4rem 0', outline: 'none', fontSize: '0.9rem', width: '100%' }}
//             />
//             <input
//               type="text" name="transactionId" placeholder="Last 5 digits of Transaction ID"
//               onChange={handleChange} value={paymentData.transactionId} required
//               style={{ border: 'none', borderBottom: '1px solid #999', padding: '0.4rem 0', outline: 'none', fontSize: '0.9rem', width: '100%' }}
//             />
//             <input
//               type="text" value={courseId} readOnly
//               style={{ border: 'none', borderBottom: '1px solid #ddd', padding: '0.4rem 0', outline: 'none', fontSize: '0.9rem', color: '#555', background: 'transparent', width: '100%' }}
//             />
//             <input
//               type="text" value={title} readOnly
//               style={{ border: 'none', borderBottom: '1px solid #ddd', padding: '0.4rem 0', outline: 'none', fontSize: '0.9rem', color: '#555', background: 'transparent', width: '100%' }}
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               style={{
//                 padding: '0.75rem', borderRadius: '9999px',
//                 background: '#2d7a4f', color: '#fff',
//                 border: 'none', fontWeight: '600',
//                 fontSize: '1rem', cursor: 'pointer',
//                 marginTop: '0.5rem',
//               }}
//             >
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
//-----------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import qrcode from "../Assets/Images/qrcode.png";

const PaymentForm = ({ courseId, title, onClose }) => {
  const [paymentData, setPaymentData] = useState({
    email: '',
    mobile: '',
    transactionId: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      formData.append('entry.1598495340', paymentData.email);
      formData.append('entry.16627134', paymentData.mobile);
      formData.append('entry.686243578', paymentData.transactionId);
      formData.append('entry.631697079', courseId);
      formData.append('entry.706764247', title);

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse',
        { method: 'POST', mode: 'no-cors', body: formData }
      );

      setSuccess('Submitted! You will receive access within 2 hours.');
      setTimeout(() => onClose(), 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          display: 'flex',
          gap: '2rem',
          maxWidth: '720px',
          width: '90%',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* X close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'none', border: 'none',
            fontSize: '1.4rem', cursor: 'pointer', color: '#555',
            zIndex: 1, lineHeight: 1,
          }}
        >✕</button>

        {/* LEFT: QR code + instructions */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem', paddingTop: '1rem',
        }}>
          <img
            src={qrcode}
            alt="QR Code"
            style={{ width: '160px', height: '160px', objectFit: 'contain' }}
          />
          <p style={{ fontWeight: 'bold', margin: 0 }}>OR</p>
          <p style={{ fontWeight: '600', fontSize: '0.95rem', margin: 0 }}>
            UPI ID: lumin.co.in@axl
          </p>
          <p style={{
            color: 'red', fontSize: '0.78rem',
            textAlign: 'center', lineHeight: '1.6', margin: 0,
          }}>
            Scan the QR code or pay the required amount on the given UPI ID.<br />
            After paying, fill out the details in the form provided.<br />
            You will be given access to course material through your email ID
            that you have filled in the form.<br />
            The confirmation will be done within 2 hours.
          </p>
        </div>

        {/* Vertical divider */}
        <div style={{ width: '1px', background: '#ddd', alignSelf: 'stretch' }} />

        {/* RIGHT: Course info + form */}
        <div style={{
          flex: 1, display: 'flex',
          flexDirection: 'column', gap: '0.75rem',
        }}>
          {/* Header row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontWeight: 'bold', color: '#2d7a4f',
            borderBottom: '1px solid #eee', paddingBottom: '0.5rem',
          }}>
            <span>Course Details</span>
            <span>Price</span>
          </div>

          {/* Course name + price */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontSize: '0.95rem', marginBottom: '0.25rem',
          }}>
            <span>{title}</span>
            <span style={{ fontWeight: '700', color: '#2d7a4f' }}>₹299</span>
          </div>

          {/* Messages */}
          {error && (
            <p style={{ color: 'red', fontSize: '0.85rem', margin: 0 }}>{error}</p>
          )}
          {success && (
            <p style={{ color: 'green', fontSize: '0.85rem', margin: 0 }}>{success}</p>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={paymentData.email}
              required
              style={{
                border: 'none', borderBottom: '1px solid #999',
                padding: '0.4rem 0', outline: 'none',
                fontSize: '0.9rem', width: '100%', background: 'transparent',
              }}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              onChange={handleChange}
              value={paymentData.mobile}
              required
              style={{
                border: 'none', borderBottom: '1px solid #999',
                padding: '0.4rem 0', outline: 'none',
                fontSize: '0.9rem', width: '100%', background: 'transparent',
              }}
            />
            <input
              type="text"
              name="transactionId"
              placeholder="Last 5 digits of Transaction ID"
              onChange={handleChange}
              value={paymentData.transactionId}
              required
              style={{
                border: 'none', borderBottom: '1px solid #999',
                padding: '0.4rem 0', outline: 'none',
                fontSize: '0.9rem', width: '100%', background: 'transparent',
              }}
            />
            {/* Read-only fields showing course info */}
            <input
              type="text"
              value={courseId}
              readOnly
              style={{
                border: 'none', borderBottom: '1px solid #ddd',
                padding: '0.4rem 0', outline: 'none',
                fontSize: '0.9rem', color: '#555',
                background: 'transparent', width: '100%',
              }}
            />
            <input
              type="text"
              value={title}
              readOnly
              style={{
                border: 'none', borderBottom: '1px solid #ddd',
                padding: '0.4rem 0', outline: 'none',
                fontSize: '0.9rem', color: '#555',
                background: 'transparent', width: '100%',
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '0.75rem',
                borderRadius: '9999px',
                background: loading ? '#aaa' : '#2d7a4f',
                color: '#fff',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '0.5rem',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;