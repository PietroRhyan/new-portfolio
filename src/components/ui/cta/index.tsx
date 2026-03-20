const EMAIL = "pietrorhyan.contact@gmail.com";

export function CTAButton({ label }: { label: string }) {
  return (
    <a
      href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button group"
    >
      <span className="cta-button__inner">
        <span className="font-semibold text-[16px] font-outfit text-background">
          {label}
        </span>
      </span>
    </a>
  );
}
