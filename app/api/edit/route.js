import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  const op = formData.get('op');
  const buffer = Buffer.from(await file.arrayBuffer());
  const mime = file.type;
  let output;
  if (op === 'blur') {
    const sigma = parseInt(formData.get('sigma') || '5');
    output = await sharp(buffer).blur(sigma).toBuffer();
  } else if (op === 'grayscale') {
    output = await sharp(buffer).grayscale().toBuffer();
  } else if (op === 'brightness') {
    const brightness = parseFloat(formData.get('brightness') || '1');
    const saturation = parseFloat(formData.get('saturation') || '1');
    output = await sharp(buffer).modulate({ brightness, saturation }).toBuffer();
  } else {
    return NextResponse.json({ error: 'Unknown op' }, { status: 400 });
  }
  const b64 = output.toString('base64');
  return NextResponse.json({ result: `data:${mime};base64,${b64}` });
}
