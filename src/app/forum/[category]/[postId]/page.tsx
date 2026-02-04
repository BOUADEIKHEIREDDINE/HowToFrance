import SectionHero from '@/components/SectionHero';

type PostPageProps = {
  params: {
    category: string;
    postId: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const { category, postId } = params;

  return (
    <>
      <SectionHero title={`Post ID: ${postId}`} subtitle={`Category: ${category}`} />

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Dummy Thread</h2>
        <p>This is a placeholder for the thread content.</p>
        <p className="text-sm text-gray-600">
          Later, this page will fetch real posts from the forum backend.
        </p>
      </section>
    </>
  );
}
