"use client";

import { useSocket } from "@/components/provider/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Live: Real-time updates
    </Badge>
  );
};
