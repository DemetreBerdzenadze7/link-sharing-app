import {
  useContext,
  createContext,
  type ReactNode,
  useState,
  useEffect,
} from "react";

interface AccountContextType {
  accounts: User[];
  currentAccount: User | undefined;
  addAccount: (account: TInputs) => void;
  login: (email: string) => void;
  addLink: (email: string) => void;
  updateLink: (
    email: string,
    index: number,
    platform: string,
    url: string,
  ) => void;
}

const AccountContext = createContext<AccountContextType | null>(null);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState<User[]>(() => {
    return JSON.parse(localStorage.getItem("accounts") ?? "[]") || [];
  });
  const [currentEmail, setCurrentEmail] = useState(
    () => localStorage.getItem("currentUser") ?? "",
  );

  const currentAccount = accounts.find(
    (account) => account.email === currentEmail,
  );

  const addAccount = (account: TInputs) => {
    setAccounts((prev) => [
      ...prev,
      {
        ...account,
        firstName: "",
        lastName: "",
        profilePicture: "",
        links: [],
      },
    ]);
  };

  const login = (email: string) => {
    setCurrentEmail(email);
    localStorage.setItem("currentUser", email);
  };

  const addLink = (email: string) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.email === email
          ? {
              ...account,
              links: [...account.links, { platform: "GitHub", link: "" }],
            }
          : account,
      ),
    );
  };

  const updateLink = (
    email: string,
    index: number,
    platform: string,
    url: string,
  ) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.email === email
          ? {
              ...account,
              links: account.links.map((link, i) =>
                i === index ? { platform, link: url } : link,
              ),
            }
          : account,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  return (
    <AccountContext.Provider
      value={{
        accounts,
        currentAccount,
        addAccount,
        login,
        addLink,
        updateLink,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) {
    throw new Error("useAccount must be used inside <AccountProvider>");
  }
  return ctx;
};
