package info.sollie.util;

import com.google.common.hash.Hashing;
import com.google.common.io.ByteSource;
import com.google.common.io.ByteStreams;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class Http {

    /**
     * Wrap a input stream into a ByteSource
     * @throws IOException
     */
    public static ByteSource inputStreamToByteSource(InputStream inputstream) throws IOException {
        byte[] bytes = ByteStreams.toByteArray(inputstream);
        return ByteSource.wrap(bytes);
    }

    /**
     * @param content to generate a hash.
     * @return a sha256 hash.
     */
    public static String hash(final String content) {
        return Hashing.sha256()
                .hashString(content, StandardCharsets.UTF_8)
                .toString();
    }
}
