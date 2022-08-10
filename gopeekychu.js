const SUPABASE_URL = 'https://oecwumthzqwhsmurftzb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lY3d1bXRoenF3aHNtdXJmdHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjIyNjUsImV4cCI6MTk3NTYzODI2NX0.JkoK83FGrRM17viuvbvF3yNcpCN9fvm2Nx4pldFAE2M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPokemans() {

    const response = await client
        .from('pokemon')
        .select();

    return checkError(response);
}

export async function getPokemon(id) {
    const response = await client
        .from('pokemon')
        .select()
        .match({ id: id })
        .single();
    
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}