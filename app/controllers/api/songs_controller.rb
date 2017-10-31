class Api::SongsController < ApplicationController
    def index
        @artist = Artist.find(params[:artist_id])
        @songs = @artist.songs.all
        # you could also string these together into one line
        # @songs = Artist.find(params[:artist_id]).songs
        render json: @songs
    end

    def create
        @artist = Artist.find(params[:artist_id])
        @song = Song.new(song_params)
        @artist.songs << @song
        @artist.save!
        render status: :ok
    end

    def show
        # @artist = Artist.find(params[:artist_id])
        # @song = @artist.songs.find(params[:id])
        # render json: @song

        # you dont need the artist id here b/c you only want to see the song
        @song = Song.find(params[:id])
        render json: @song
    end

    def update
        @song = Song.find(params[:id])
        @song.update!(song_params)
        render json:  @song
    end

    def destroy
 
        Song.find(params[:id]).delete
        render status: :ok
   
    end

    private

    def song_params
        params.require(:song).permit(:title, :album, :preview_url)
    end 
    

end
