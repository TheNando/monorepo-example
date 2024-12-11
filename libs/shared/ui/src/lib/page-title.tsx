export interface PageTitleProps {
  text: string;
}

export function PageTitle({ text }: PageTitleProps) {
  return <h1 className="text-3xl mt-3 mb-4">{text}</h1>;
}
