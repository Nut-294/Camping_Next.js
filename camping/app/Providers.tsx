import { ThemeProvider } from "./theme-provider";

//ReactNode เป็น type ที่กำหนดให้พวกที่ return เป็น jsx ex.component
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
