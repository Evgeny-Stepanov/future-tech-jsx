import "./Form.scss";
import "./ReactPhoneNumberInput.scss";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import Button from "@/shared/ui/Button";
import IconSVG from "./icon.svg?react";
import setContactsHeaderPaddingTop from "@/shared/utils/setContactsHeaderPaddingTop";
import { useRef, useEffect } from "react";

const Form = () => {
	const formSchema = z.object({
		firstName: z
			.string()
			.trim()
			.min(1, "Field is required")
			.min(2, "First name is too short")
			.regex(/^[a-zA-Z]+$/, "Only Latin letters are allowed")
			.max(20, "First name is too long")
			.toLowerCase(),

		lastName: z
			.string()
			.trim()
			.min(1, "Field is required")
			.min(2, "Last name is too short")
			.regex(/^[a-zA-Z]+$/, "Only Latin letters are allowed")
			.max(20, "Last name is too long")
			.toLowerCase(),

		email: z
			.string()
			.trim()
			.min(1, "Field is required")
			.toLowerCase()
			.email({ message: "Incorrect email format" }),

		phone: z
			.string()
			.min(1, "Field is required")
			.refine((val) => isValidPhoneNumber(val || ""), {
				message: "The number is too short for the selected country",
			}),

		message: z.string().trim().min(1, "Field is required"),

		agree: z.boolean().refine((val) => val === true, {
			message: "Your consent is required",
		}),
	});

	type FormValues = z.infer<typeof formSchema>;

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
			agree: true,
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log("Form data:", data);
		alert("Your data has been sent successfully.");
		reset();
	};

	const headerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const handleResize = () => {
			if (!headerRef.current) return;

			if (window.innerWidth >= 1300) {
				setContactsHeaderPaddingTop(headerRef.current);
			} else {
				headerRef.current.style.removeProperty("padding-block");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="form">
			<header
				className="form__header"
				ref={headerRef}
			>
				<div>
					<IconSVG
						width={80}
						height={80}
						aria-hidden="true"
					/>
				</div>
				<h2 className="h2">Get in Touch with AI Podcasts</h2>
			</header>

			<form
				className="form__body"
				onSubmit={handleSubmit(onSubmit)}
			>
				<ul className="form__list">
					<li className="form__item">
						<label htmlFor="first-name">First Name</label>
						<input
							type="text"
							id="first-name"
							placeholder="Enter First Name"
							{...register("firstName")}
							className={errors.firstName ? "input-error" : ""}
						></input>
						{errors.firstName && (
							<p className="error">{errors.firstName.message}</p>
						)}
					</li>

					<li className="form__item">
						<label htmlFor="last-name">Last Name</label>
						<input
							type="text"
							id="last-name"
							placeholder="Enter Last Name"
							{...register("lastName")}
							className={errors.lastName ? "input-error" : ""}
						></input>
						{errors.lastName && (
							<p className="error">{errors.lastName.message}</p>
						)}
					</li>

					<li className="form__item">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your Email"
							{...register("email")}
							className={errors.email ? "input-error" : ""}
						></input>
						{errors.email && <p className="error">{errors.email.message}</p>}
					</li>

					<li className="form__item">
						<label htmlFor="phone">Phone Number</label>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<PhoneInput
									{...field}
									id="phone"
									placeholder="Enter phone number"
									defaultCountry="RU"
									international
									withCountryCallingCode
									smartCaret={true}
									className={errors.phone ? "input-error" : ""}
								/>
							)}
						/>
						{errors.phone && <p className="error">{errors.phone.message}</p>}
					</li>

					<li className="form__item">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							placeholder="Enter your Message"
							{...register("message")}
							className={errors.message ? "input-error" : ""}
						></textarea>
						{errors.message && (
							<p className="error">{errors.message.message}</p>
						)}
					</li>

					<li className="form__item">
						<div>
							<label htmlFor="checkbox">
								I agree with Terms of Use and Privacy Policy
							</label>
							<input
								type="checkbox"
								id="checkbox"
								{...register("agree")}
								className={errors.agree ? "input-error" : ""}
							></input>
						</div>

						{errors.agree && <p className="error">{errors.agree.message}</p>}
					</li>

					<li className="form__item">
						<Button
							title="Send"
							type="submit"
						/>
					</li>
				</ul>
			</form>
		</section>
	);
};

export default Form;
