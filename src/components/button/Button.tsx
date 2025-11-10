
type ButtonPropsType = {
  link: string;
  title: string;
  outlined?: boolean;
}
export const Button = ({link, title, outlined}:ButtonPropsType) => {
  return (
    <a href={link}>{title}</a>
  )
}


