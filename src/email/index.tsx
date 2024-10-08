import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import * as React from "react";

type Props = { user: string; invitation: string; invitedByEmail: string };

export function InvitationEmail({ user, invitation, invitedByEmail }: Props) {
	const previewText = "You have invited to join a workspace";
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<Section className="mt-[32px]">
							<Img
								src={
									"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png?20230404233503"
								}
								width="80"
								height="18"
								alt="Vercel"
								className="my-0 mx-auto"
							/>
						</Section>
						<Heading className="text-black text-[18px] font-semibold text-center p-0 my-[30px] mx-0">
							Welcome <strong>{user}</strong> 🎉
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							Hello {user},
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							<strong>{user}</strong> (
							<Link
								href={`mailto:${invitedByEmail}`}
								className="text-blue-600 no-underline"
							>
								{invitedByEmail}
							</Link>
							) has invited you to their <strong>{"Workplace"}</strong>
						</Text>
						<Section className="text-center mt-[32px] mb-[32px]">
							<Button
								className="bg-[#000000] text-white text-[16px] rounded-md font-semibold no-underline text-center p-2"
								href={invitation}
							>
								Accept Invitation
							</Button>
						</Section>
						<Text className="text-black text-[14px] leading-[24px]">
							or copy and paste this URL into your browser:{" "}
							<Link href={"inviteLink"} className="text-blue-600 no-underline">
								Invitation Link
							</Link>
						</Text>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							This invitation was intended for {user}
							<span className="text-black">{"username"} </span>.This invite was
							sent from <span className="text-black">{"inviteFromIp"}</span>{" "}
							located in{" "}
							<span className="text-black">{"inviteFromLocation"}</span>. If you
							were not expecting this invitation, you can ignore this email. If
							you are concerned about your account's safety, please reply to
							this email to get in touch with us.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
