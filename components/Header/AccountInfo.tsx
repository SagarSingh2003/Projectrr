import { UserButton } from "@clerk/nextjs";

const AccountInfo = () => {


    return(
      <section className="bg-[white] h-full flex items-center">
        <UserButton></UserButton>
      </section>
    )
}

export default AccountInfo;