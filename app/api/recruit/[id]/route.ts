import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { id } = context.params;

    const updatedRecruit = await prisma.recruitPost.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: data.title,
        description: data.description,
        position: data.position,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        thumbnailUrl: data.thumbnailUrl,
      },
    });

    return NextResponse.json(updatedRecruit);
  } catch (error) {
    console.error("Error updating recruit post:", error);
    return NextResponse.json(
      { error: "Failed to update recruit post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    await prisma.recruitPost.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({ message: "Recruit post deleted successfully" });
  } catch (error) {
    console.error("Error deleting recruit post:", error);
    return NextResponse.json(
      { error: "Failed to delete recruit post" },
      { status: 500 }
    );
  }
}
