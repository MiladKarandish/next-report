export interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer>
      <div
        className={`glass w-full flex flex-row-reverse justify-start items-center px-4 py-2 gap-2 bg-[#2F4AAE] text-white text-lg`}
      >
        <a href="https://raghamapp.com">
          <img className={`w-8 h-8 `} src="https://beta.raghamapp.com/icons/logo-white.svg" alt="ragham" />
        </a>
        <p>نرم افزار مدیریت طلب و بدهی رقم</p>
      </div>
    </footer>
  );
};

export default Footer;
