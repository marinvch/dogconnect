import { NextRequest, NextResponse } from "next/server";

export interface ApiCommunication {
  req: NextRequest;
  res: NextResponse;
}
