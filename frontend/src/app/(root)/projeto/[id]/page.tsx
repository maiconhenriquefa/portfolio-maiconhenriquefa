interface Params {
  id: string;
}

const ProjetoPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return (
    <div className="bg-black">
      <div>
        <h1>Projeto {id}</h1>
      </div>
    </div>
  );
};

export default ProjetoPage;
