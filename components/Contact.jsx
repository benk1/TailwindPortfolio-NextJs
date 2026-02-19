import Image from 'next/image';
import Link from 'next/link';
import { useId, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/images/contact.jpg';

const Contact = () => {
	const formId = useId();

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'phone') {
			const cleaned = value.replace(/[^\d+ ]/g, '');
			setFormData((prev) => ({ ...prev, phone: cleaned }));
			return;
		}

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setIsSending(true);

		try {
			const res = await fetch(
				'https://getform.io/f/d98e5e3c-7587-44d2-b918-6d202e44ff0a',
				{
					method: 'POST',
					body: new URLSearchParams(formData),
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				},
			);

			if (!res.ok) {
				throw new Error('Request failed');
			}

			setIsSubmitted(true);

			// Reset form
			setFormData({
				name: '',
				phone: '',
				email: '',
				subject: '',
				message: '',
			});

			setTimeout(() => setIsSubmitted(false), 4000);
		} catch (e) {
			setError('Something went wrong. Please try again.');
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section
			id="contact"
			className="w-full px-2 m-auto section-offset"
			aria-labelledby="contact-heading"
		>
			<div className="max-w-[1240px] m-auto px-2 w-full min-h-screen">
				<p className="text-xl font-bold tracking-widest text-blue-700 uppercase">
					Contact
				</p>

				<h2 id="contact-heading" className="py-4">
					Get In Touch
				</h2>

				<div className="grid gap-8 lg:grid-cols-5">
					{/* Left card */}
					<aside
						className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl"
						aria-label="Contact details"
					>
						<div className="h-full lg:p-4">
							<div>
								<Image
									className="duration-300 ease-in rounded-xl hover:scale-105"
									src={ContactImg}
									alt="Contact section illustration"
									priority={false}
								/>
							</div>

							<div>
								<h3 className="py-2">Bernard Kakengi</h3>
								<p>Helsinki</p>
								<p>Web Developer</p>

								<p className="py-4">
									I am available for consultant or full-time positions. Contact
									me and let&apos;s have a chat.
								</p>
							</div>

							<div>
								<p className="pt-8 uppercase">Connect With Me</p>

								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/bernard-k-ba2003173/"
										target="_blank"
										rel="noreferrer"
										aria-label="Open LinkedIn profile in a new tab"
										className="relative group focus:outline-none"
									>
										<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#E07400]">
											<FaLinkedinIn aria-hidden="true" />
										</div>
										<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
											LinkedIn
										</span>
									</a>

									<a
										href="#contact-form"
										aria-label="Jump to the contact form"
										className="relative group focus:outline-none"
									>
										<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#E07400]">
											<AiOutlineMail aria-hidden="true" />
										</div>
										<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
											Send email using the form
										</span>
									</a>

									<Link href="/resume" legacyBehavior>
										<a
											aria-label="Open resume page"
											className="relative group focus:outline-none"
										>
											<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#E07400]">
												<BsFillPersonLinesFill aria-hidden="true" />
											</div>
											<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
												Resume
											</span>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</aside>

					{/* Right card: Form */}
					<div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<div id="contact-form" className="sr-only" aria-hidden="true" />

							{isSubmitted ? (
								<div
									className="success-message"
									role="status"
									aria-live="polite"
								>
									Your message has been sent successfully!
								</div>
							) : (
								<>
									{error ? (
										<p role="alert" className="mb-4 text-sm text-red-700">
											{error}
										</p>
									) : null}

									<form
										onSubmit={handleSubmit}
										aria-describedby={`${formId}-help`}
									>
										<p id={`${formId}-help`} className="sr-only">
											All fields marked required must be filled before sending.
										</p>

										<div className="grid w-full gap-4 py-2 md:grid-cols-2">
											<div className="flex flex-col">
												<label
													htmlFor={`${formId}-name`}
													className="py-2 text-sm uppercase"
												>
													Name <span aria-hidden="true">*</span>
												</label>
												<input
													id={`${formId}-name`}
													className="flex p-3 border-2 border-gray-300 rounded-lg"
													type="text"
													name="name"
													autoComplete="name"
													required
													value={formData.name}
													onChange={handleChange}
												/>
											</div>

											<div className="flex flex-col">
												<label
													htmlFor={`${formId}-phone`}
													className="py-2 text-sm uppercase"
												>
													Phone Number
												</label>
												<input
													id={`${formId}-phone`}
													className="flex p-3 border-2 border-gray-300 rounded-lg"
													type="tel"
													name="phone"
													autoComplete="tel"
													inputMode="numeric"
													pattern="^\+?[0-9\s]*$"
													placeholder="+358401234567"
													value={formData.phone}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="flex flex-col py-2">
											<label
												htmlFor={`${formId}-email`}
												className="py-2 text-sm uppercase"
											>
												Email <span aria-hidden="true">*</span>
											</label>
											<input
												id={`${formId}-email`}
												className="flex p-3 border-2 border-gray-300 rounded-lg"
												type="email"
												name="email"
												autoComplete="email"
												required
												value={formData.email}
												onChange={handleChange}
											/>
										</div>

										<div className="flex flex-col py-2">
											<label
												htmlFor={`${formId}-subject`}
												className="py-2 text-sm uppercase"
											>
												Subject <span aria-hidden="true">*</span>
											</label>
											<input
												id={`${formId}-subject`}
												className="flex p-3 border-2 border-gray-300 rounded-lg"
												type="text"
												name="subject"
												required
												value={formData.subject}
												onChange={handleChange}
											/>
										</div>

										<div className="flex flex-col py-2">
											<label
												htmlFor={`${formId}-message`}
												className="py-2 text-sm uppercase"
											>
												Message <span aria-hidden="true">*</span>
											</label>
											<textarea
												id={`${formId}-message`}
												className="p-3 border-2 border-gray-300 rounded-lg"
												rows={10}
												name="message"
												required
												value={formData.message}
												onChange={handleChange}
											/>
										</div>

										<button
											type="submit"
											disabled={isSending}
											aria-disabled={isSending}
											className="w-full p-4 mt-4 text-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
										>
											{isSending ? 'Sending…' : 'Send Message'}
										</button>
									</form>
								</>
							)}
						</div>
					</div>
				</div>

				<div className="flex justify-center py-12">
					<a
						href="#home"
						aria-label="Back to top"
						className="focus:outline-none"
					>
						<div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#E07400]">
							<HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
