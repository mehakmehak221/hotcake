export const CALENDLY_URL = "https://calendly.com/maxtronize/30min";

export const API_BASE_URL = "https://hot-cake-backend.onrender.com";

export const SUBMIT_FORM_ENDPOINT = `${API_BASE_URL}/hot-cake`;

export type SubmissionPayload = {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  message: string;
};

export type SubmissionSuccess = {
  success: true;
  message: string;
  data: {
    id: string;
    name: string;
    companyName: string;
    email: string;
    mobile: string;
    message: string;
    createdAt: string;
  };
};

export type SubmissionError = {
  success: false;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  payload: SubmissionPayload,
): Promise<SubmissionSuccess> {
  const res = await fetch(SUBMIT_FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as SubmissionSuccess | SubmissionError;

  if (!res.ok || !data.success) {
    const err = data as SubmissionError;
    throw err;
  }

  return data;
}
