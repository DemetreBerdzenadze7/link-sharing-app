import { useCallback, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import LinkCard from "../components/link-card/LinkCard";
import EmptyLinks from "../components/empty-links/EmptyLinks";
import PhonePreview from "../components/phone-preview/PhonePreview";
import Toast from "../components/toast/Toast";
import { useAccount } from "../context/Accounts";
import { linksSchema } from "../schemas/links";

const Home = () => {
  const { currentAccount, saveLinks } = useAccount();
  const navigate = useNavigate();
  const methods = useForm<TLinksInputs>({
    resolver: yupResolver(linksSchema),
    defaultValues: { links: currentAccount?.links ?? [] },
  });
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "links",
  });
  const [showToast, setShowToast] = useState(false);

  const links = methods.watch("links");

  const onSave = (data: TLinksInputs) => {
    if (!currentAccount) return;

    saveLinks(currentAccount.email, data.links);

    // go to the preview once the profile is filled in too, otherwise just confirm
    const { firstName, lastName, profilePicture } = currentAccount;
    if (firstName && lastName && profilePicture) {
      navigate("/preview");
    } else {
      setShowToast(true);
    }
  };

  const closeToast = useCallback(() => setShowToast(false), []);

  return (
    <div className="flex w-full gap-6">
      <PhonePreview
        links={links}
        image={currentAccount?.profilePicture}
        name={`${currentAccount?.firstName ?? ""} ${currentAccount?.lastName ?? ""}`.trim()}
        email={currentAccount?.profileEmail}
      />

      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(onSave)}
          className="flex flex-1 flex-col rounded-xl bg-white"
        >
          <div className="flex flex-1 flex-col gap-10 p-6 md:p-10">
            <div className="flex flex-col gap-2 leading-normal">
              <h1 className="text-2xl font-bold text-dark-grey md:text-[32px]">
                Customize your links
              </h1>
              <p className="text-base text-grey">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <button
                type="button"
                onClick={() => append({ platform: "GitHub", link: "" })}
                className="w-full cursor-pointer rounded-lg border border-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-purple hover:bg-light-purple"
              >
                + Add new link
              </button>

              {fields.length === 0 ? (
                <EmptyLinks />
              ) : (
                fields.map((field, index) => (
                  <LinkCard
                    key={field.id}
                    index={index}
                    onRemove={() => remove(index)}
                  />
                ))
              )}
            </div>
          </div>

          <div className="flex justify-end border-t border-borders p-4 md:px-10 md:py-6">
            <button
              type="submit"
              disabled={fields.length === 0}
              className="w-full cursor-pointer rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] disabled:cursor-default disabled:opacity-25 disabled:hover:bg-purple disabled:hover:shadow-none md:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </FormProvider>

      {showToast && (
        <Toast
          message="Saved! Fill in your profile details to see the preview."
          icon="/images/icon-changes-saved.svg"
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default Home;
