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
  canPreview: boolean;
  addAccount: (account: TInputs) => void;
  login: (email: string) => void;
  saveLinks: (email: string, links: IAccountLink[]) => void;
  updateProfileDetails: (
    email: string,
    firstName: string,
    lastName: string,
    profileEmail: string,
    profilePicture: string,
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

  // preview is only available once the profile and at least one link are saved
  const canPreview = Boolean(
    currentAccount &&
    currentAccount.firstName &&
    currentAccount.lastName &&
    currentAccount.profilePicture &&
    currentAccount.links.length > 0,
  );

  const addAccount = (account: TInputs) => {
    setAccounts((prev) => [
      ...prev,
      {
        ...account,
        firstName: "",
        lastName: "",
        profileEmail: "",
        profilePicture: "",
        links: [],
      },
    ]);
  };

  const login = (email: string) => {
    setCurrentEmail(email);
    localStorage.setItem("currentUser", email);
  };

  const saveLinks = (email: string, links: IAccountLink[]) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.email === email ? { ...account, links } : account,
      ),
    );
  };

  const updateProfileDetails = (
    email: string,
    firstName: string,
    lastName: string,
    profileEmail: string,
    profilePicture: string,
  ) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.email === email
          ? { ...account, firstName, lastName, profileEmail, profilePicture }
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
        canPreview,
        addAccount,
        login,
        saveLinks,
        updateProfileDetails,
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
