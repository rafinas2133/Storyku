export const Button = ({ children, className, ...props }) => {
    return (
        <button className={`flex h-12 px-4 py-3 transition-colors md:px-6 drop-shadow align-middle justify-center  ${className}`} {...props}>
            {children}
        </button>
    );
};

export const ButtonPrimary = ({ className, children, ...props }) => {
    return (
      <Button className={`text-white bg-green-600 hover:bg-green-500 ${className}`} {...props}>
        {children}
      </Button>
    );
  };

export const ButtonSecondary = ({ className, children, ...props }) => {
    return (
        <Button className={` border-2 text-primary hover:bg-gray-100 border-primary ${className}`} {...props}>
            {children}
        </Button>
    );
};
