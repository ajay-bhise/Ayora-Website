interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "muted";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-elevated border border-border text-fg-secondary",
    brand: "bg-brand-dim border border-brand/20 text-brand",
    muted: "bg-section text-fg-muted",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
