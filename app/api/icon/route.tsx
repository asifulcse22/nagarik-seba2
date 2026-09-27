import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const size = Number(searchParams.get('size')) || 512;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6b0f9c 0%, #9b1fe8 100%)',
          borderRadius: Math.round(size * 0.22),
          color: '#ffffff',
          fontSize: Math.round(size * 0.55),
          fontWeight: 900,
        }}
      >
        ন
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
}