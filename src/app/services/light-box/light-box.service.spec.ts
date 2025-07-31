import { ImageGallery } from 'src/app/models/light-box.model';
import { LightBoxService } from './light-box.service';

describe('LightBoxService', () => {
  let svc: LightBoxService;
  const gallery: ImageGallery[] = [
    { imageSrc: 'a.jpg', imageAlt: 'a', imageLabel: 'a' },
    { imageSrc: 'b.jpg', imageAlt: 'b', imageLabel: 'b' },
    { imageSrc: 'c.jpg', imageAlt: 'c', imageLabel: 'c' },
  ];

  const getState = async () =>
    await new Promise<any>((resolve) =>
      svc.imageGalleryState.subscribe((s) => resolve(s)).unsubscribe(),
    );

  beforeEach(() => {
    svc = new LightBoxService();
  });

  it('emits initial state (closed, index 0, empty gallery)', async () => {
    const s = await getState();
    expect(s.isGalleryOpen).toBe(false);
    expect(s.index).toBe(0);
    expect(s.imageGallery).toEqual([]);
  });

  it('openGallery sets gallery, index, and opens', async () => {
    svc.openGallery(gallery, 1);
    const s = await getState();
    expect(s.isGalleryOpen).toBe(true);
    expect(s.index).toBe(1);
    expect(s.imageGallery).toEqual(gallery);
  });

  it('closeGallery closes when open', async () => {
    svc.openGallery(gallery, 0);
    svc.closeGallery();
    const s = await getState();
    expect(s.isGalleryOpen).toBe(false);
    expect(s.index).toBe(0); // unchanged
  });

  it('closeGallery does nothing when already closed (guard path)', async () => {
    // initial state is closed; call close again to hit guard
    svc.closeGallery();
    const s = await getState();
    expect(s.isGalleryOpen).toBe(false);
    expect(s.index).toBe(0);
    expect(s.imageGallery).toEqual([]); // unchanged
  });

  describe('nextImage', () => {
    it('increments index when open and not at end', async () => {
      svc.openGallery(gallery, 1);
      svc.nextImage();
      const s = await getState();
      expect(s.isGalleryOpen).toBe(true);
      expect(s.index).toBe(2);
    });

    it('wraps to 0 from last index', async () => {
      svc.openGallery(gallery, 2);
      svc.nextImage();
      const s = await getState();
      expect(s.index).toBe(0);
    });

    it('does nothing when closed (guard path)', async () => {
      // initial is closed; call nextImage to hit guard
      svc.nextImage();
      const s = await getState();
      expect(s.isGalleryOpen).toBe(false);
      expect(s.index).toBe(0);
      expect(s.imageGallery).toEqual([]);
    });
  });

  describe('previousImage', () => {
    it('decrements index when open and not at start', async () => {
      svc.openGallery(gallery, 2);
      svc.previousImage();
      const s = await getState();
      expect(s.isGalleryOpen).toBe(true);
      expect(s.index).toBe(1);
    });

    it('wraps to last from index 0', async () => {
      svc.openGallery(gallery, 0);
      svc.previousImage();
      const s = await getState();
      expect(s.index).toBe(gallery.length - 1);
    });

    it('does nothing when closed (guard path)', async () => {
      svc.previousImage();
      const s = await getState();
      expect(s.isGalleryOpen).toBe(false);
      expect(s.index).toBe(0);
      expect(s.imageGallery).toEqual([]);
    });
  });
});
