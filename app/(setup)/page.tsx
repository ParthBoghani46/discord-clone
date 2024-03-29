import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { IntialModel } from "@/components/models/Initial-model";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <IntialModel />
    </div>
  );
};

export default SetupPage;
