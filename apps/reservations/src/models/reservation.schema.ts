import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  startData: Date;
  @Prop()
  endDate: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string;
  @Prop()
  invoice: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
