import { Server,Member,Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server &{
    membes:(Member & {profile : Profile})[];
}