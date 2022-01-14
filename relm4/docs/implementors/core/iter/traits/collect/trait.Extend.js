(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["cairo"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"cairo/struct.PdfOutline.html\" title=\"struct cairo::PdfOutline\">PdfOutline</a>&gt; for <a class=\"struct\" href=\"cairo/struct.PdfOutline.html\" title=\"struct cairo::PdfOutline\">PdfOutline</a>","synthetic":false,"types":["cairo::enums::PdfOutline"]}];
implementors["either"] = [{"text":"impl&lt;L, R, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["futures_util"] = [{"text":"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesOrdered.html\" title=\"struct futures_util::stream::FuturesOrdered\">FuturesOrdered</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::futures_ordered::FuturesOrdered"]},{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesUnordered.html\" title=\"struct futures_util::stream::FuturesUnordered\">FuturesUnordered</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::futures_unordered::FuturesUnordered"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;St&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.SelectAll.html\" title=\"struct futures_util::stream::SelectAll\">SelectAll</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::select_all::SelectAll"]}];
implementors["gio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.AppInfoCreateFlags.html\" title=\"struct gio::AppInfoCreateFlags\">AppInfoCreateFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.AppInfoCreateFlags.html\" title=\"struct gio::AppInfoCreateFlags\">AppInfoCreateFlags</a>","synthetic":false,"types":["gio::auto::flags::AppInfoCreateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.ApplicationFlags.html\" title=\"struct gio::ApplicationFlags\">ApplicationFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.ApplicationFlags.html\" title=\"struct gio::ApplicationFlags\">ApplicationFlags</a>","synthetic":false,"types":["gio::auto::flags::ApplicationFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.AskPasswordFlags.html\" title=\"struct gio::AskPasswordFlags\">AskPasswordFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.AskPasswordFlags.html\" title=\"struct gio::AskPasswordFlags\">AskPasswordFlags</a>","synthetic":false,"types":["gio::auto::flags::AskPasswordFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.BusNameOwnerFlags.html\" title=\"struct gio::BusNameOwnerFlags\">BusNameOwnerFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.BusNameOwnerFlags.html\" title=\"struct gio::BusNameOwnerFlags\">BusNameOwnerFlags</a>","synthetic":false,"types":["gio::auto::flags::BusNameOwnerFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.BusNameWatcherFlags.html\" title=\"struct gio::BusNameWatcherFlags\">BusNameWatcherFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.BusNameWatcherFlags.html\" title=\"struct gio::BusNameWatcherFlags\">BusNameWatcherFlags</a>","synthetic":false,"types":["gio::auto::flags::BusNameWatcherFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.ConverterFlags.html\" title=\"struct gio::ConverterFlags\">ConverterFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.ConverterFlags.html\" title=\"struct gio::ConverterFlags\">ConverterFlags</a>","synthetic":false,"types":["gio::auto::flags::ConverterFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusCallFlags.html\" title=\"struct gio::DBusCallFlags\">DBusCallFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusCallFlags.html\" title=\"struct gio::DBusCallFlags\">DBusCallFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusCallFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusCapabilityFlags.html\" title=\"struct gio::DBusCapabilityFlags\">DBusCapabilityFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusCapabilityFlags.html\" title=\"struct gio::DBusCapabilityFlags\">DBusCapabilityFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusCapabilityFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusConnectionFlags.html\" title=\"struct gio::DBusConnectionFlags\">DBusConnectionFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusConnectionFlags.html\" title=\"struct gio::DBusConnectionFlags\">DBusConnectionFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusConnectionFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusInterfaceSkeletonFlags.html\" title=\"struct gio::DBusInterfaceSkeletonFlags\">DBusInterfaceSkeletonFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusInterfaceSkeletonFlags.html\" title=\"struct gio::DBusInterfaceSkeletonFlags\">DBusInterfaceSkeletonFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusInterfaceSkeletonFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusMessageFlags.html\" title=\"struct gio::DBusMessageFlags\">DBusMessageFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusMessageFlags.html\" title=\"struct gio::DBusMessageFlags\">DBusMessageFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusMessageFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusProxyFlags.html\" title=\"struct gio::DBusProxyFlags\">DBusProxyFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusProxyFlags.html\" title=\"struct gio::DBusProxyFlags\">DBusProxyFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusProxyFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusSendMessageFlags.html\" title=\"struct gio::DBusSendMessageFlags\">DBusSendMessageFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusSendMessageFlags.html\" title=\"struct gio::DBusSendMessageFlags\">DBusSendMessageFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusSendMessageFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusServerFlags.html\" title=\"struct gio::DBusServerFlags\">DBusServerFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusServerFlags.html\" title=\"struct gio::DBusServerFlags\">DBusServerFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusServerFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DBusSignalFlags.html\" title=\"struct gio::DBusSignalFlags\">DBusSignalFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DBusSignalFlags.html\" title=\"struct gio::DBusSignalFlags\">DBusSignalFlags</a>","synthetic":false,"types":["gio::auto::flags::DBusSignalFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.DriveStartFlags.html\" title=\"struct gio::DriveStartFlags\">DriveStartFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.DriveStartFlags.html\" title=\"struct gio::DriveStartFlags\">DriveStartFlags</a>","synthetic":false,"types":["gio::auto::flags::DriveStartFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.FileCopyFlags.html\" title=\"struct gio::FileCopyFlags\">FileCopyFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.FileCopyFlags.html\" title=\"struct gio::FileCopyFlags\">FileCopyFlags</a>","synthetic":false,"types":["gio::auto::flags::FileCopyFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.FileCreateFlags.html\" title=\"struct gio::FileCreateFlags\">FileCreateFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.FileCreateFlags.html\" title=\"struct gio::FileCreateFlags\">FileCreateFlags</a>","synthetic":false,"types":["gio::auto::flags::FileCreateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.FileMeasureFlags.html\" title=\"struct gio::FileMeasureFlags\">FileMeasureFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.FileMeasureFlags.html\" title=\"struct gio::FileMeasureFlags\">FileMeasureFlags</a>","synthetic":false,"types":["gio::auto::flags::FileMeasureFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.FileMonitorFlags.html\" title=\"struct gio::FileMonitorFlags\">FileMonitorFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.FileMonitorFlags.html\" title=\"struct gio::FileMonitorFlags\">FileMonitorFlags</a>","synthetic":false,"types":["gio::auto::flags::FileMonitorFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.FileQueryInfoFlags.html\" title=\"struct gio::FileQueryInfoFlags\">FileQueryInfoFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.FileQueryInfoFlags.html\" title=\"struct gio::FileQueryInfoFlags\">FileQueryInfoFlags</a>","synthetic":false,"types":["gio::auto::flags::FileQueryInfoFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.IOStreamSpliceFlags.html\" title=\"struct gio::IOStreamSpliceFlags\">IOStreamSpliceFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.IOStreamSpliceFlags.html\" title=\"struct gio::IOStreamSpliceFlags\">IOStreamSpliceFlags</a>","synthetic":false,"types":["gio::auto::flags::IOStreamSpliceFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.MountMountFlags.html\" title=\"struct gio::MountMountFlags\">MountMountFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.MountMountFlags.html\" title=\"struct gio::MountMountFlags\">MountMountFlags</a>","synthetic":false,"types":["gio::auto::flags::MountMountFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.MountUnmountFlags.html\" title=\"struct gio::MountUnmountFlags\">MountUnmountFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.MountUnmountFlags.html\" title=\"struct gio::MountUnmountFlags\">MountUnmountFlags</a>","synthetic":false,"types":["gio::auto::flags::MountUnmountFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.OutputStreamSpliceFlags.html\" title=\"struct gio::OutputStreamSpliceFlags\">OutputStreamSpliceFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.OutputStreamSpliceFlags.html\" title=\"struct gio::OutputStreamSpliceFlags\">OutputStreamSpliceFlags</a>","synthetic":false,"types":["gio::auto::flags::OutputStreamSpliceFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.ResolverNameLookupFlags.html\" title=\"struct gio::ResolverNameLookupFlags\">ResolverNameLookupFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.ResolverNameLookupFlags.html\" title=\"struct gio::ResolverNameLookupFlags\">ResolverNameLookupFlags</a>","synthetic":false,"types":["gio::auto::flags::ResolverNameLookupFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.ResourceLookupFlags.html\" title=\"struct gio::ResourceLookupFlags\">ResourceLookupFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.ResourceLookupFlags.html\" title=\"struct gio::ResourceLookupFlags\">ResourceLookupFlags</a>","synthetic":false,"types":["gio::auto::flags::ResourceLookupFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.SettingsBindFlags.html\" title=\"struct gio::SettingsBindFlags\">SettingsBindFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.SettingsBindFlags.html\" title=\"struct gio::SettingsBindFlags\">SettingsBindFlags</a>","synthetic":false,"types":["gio::auto::flags::SettingsBindFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.SubprocessFlags.html\" title=\"struct gio::SubprocessFlags\">SubprocessFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.SubprocessFlags.html\" title=\"struct gio::SubprocessFlags\">SubprocessFlags</a>","synthetic":false,"types":["gio::auto::flags::SubprocessFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.TlsCertificateFlags.html\" title=\"struct gio::TlsCertificateFlags\">TlsCertificateFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.TlsCertificateFlags.html\" title=\"struct gio::TlsCertificateFlags\">TlsCertificateFlags</a>","synthetic":false,"types":["gio::auto::flags::TlsCertificateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.TlsDatabaseVerifyFlags.html\" title=\"struct gio::TlsDatabaseVerifyFlags\">TlsDatabaseVerifyFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.TlsDatabaseVerifyFlags.html\" title=\"struct gio::TlsDatabaseVerifyFlags\">TlsDatabaseVerifyFlags</a>","synthetic":false,"types":["gio::auto::flags::TlsDatabaseVerifyFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gio/struct.TlsPasswordFlags.html\" title=\"struct gio::TlsPasswordFlags\">TlsPasswordFlags</a>&gt; for <a class=\"struct\" href=\"gio/struct.TlsPasswordFlags.html\" title=\"struct gio::TlsPasswordFlags\">TlsPasswordFlags</a>","synthetic":false,"types":["gio::auto::flags::TlsPasswordFlags"]}];
implementors["glib"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.FileSetContentsFlags.html\" title=\"struct glib::FileSetContentsFlags\">FileSetContentsFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.FileSetContentsFlags.html\" title=\"struct glib::FileSetContentsFlags\">FileSetContentsFlags</a>","synthetic":false,"types":["glib::auto::flags::FileSetContentsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.FileTest.html\" title=\"struct glib::FileTest\">FileTest</a>&gt; for <a class=\"struct\" href=\"glib/struct.FileTest.html\" title=\"struct glib::FileTest\">FileTest</a>","synthetic":false,"types":["glib::auto::flags::FileTest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.FormatSizeFlags.html\" title=\"struct glib::FormatSizeFlags\">FormatSizeFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.FormatSizeFlags.html\" title=\"struct glib::FormatSizeFlags\">FormatSizeFlags</a>","synthetic":false,"types":["glib::auto::flags::FormatSizeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.IOCondition.html\" title=\"struct glib::IOCondition\">IOCondition</a>&gt; for <a class=\"struct\" href=\"glib/struct.IOCondition.html\" title=\"struct glib::IOCondition\">IOCondition</a>","synthetic":false,"types":["glib::auto::flags::IOCondition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.KeyFileFlags.html\" title=\"struct glib::KeyFileFlags\">KeyFileFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.KeyFileFlags.html\" title=\"struct glib::KeyFileFlags\">KeyFileFlags</a>","synthetic":false,"types":["glib::auto::flags::KeyFileFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.LogLevelFlags.html\" title=\"struct glib::LogLevelFlags\">LogLevelFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.LogLevelFlags.html\" title=\"struct glib::LogLevelFlags\">LogLevelFlags</a>","synthetic":false,"types":["glib::auto::flags::LogLevelFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.OptionFlags.html\" title=\"struct glib::OptionFlags\">OptionFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.OptionFlags.html\" title=\"struct glib::OptionFlags\">OptionFlags</a>","synthetic":false,"types":["glib::auto::flags::OptionFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.SpawnFlags.html\" title=\"struct glib::SpawnFlags\">SpawnFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.SpawnFlags.html\" title=\"struct glib::SpawnFlags\">SpawnFlags</a>","synthetic":false,"types":["glib::auto::flags::SpawnFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.UriFlags.html\" title=\"struct glib::UriFlags\">UriFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.UriFlags.html\" title=\"struct glib::UriFlags\">UriFlags</a>","synthetic":false,"types":["glib::auto::flags::UriFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.UriHideFlags.html\" title=\"struct glib::UriHideFlags\">UriHideFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.UriHideFlags.html\" title=\"struct glib::UriHideFlags\">UriHideFlags</a>","synthetic":false,"types":["glib::auto::flags::UriHideFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.UriParamsFlags.html\" title=\"struct glib::UriParamsFlags\">UriParamsFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.UriParamsFlags.html\" title=\"struct glib::UriParamsFlags\">UriParamsFlags</a>","synthetic":false,"types":["glib::auto::flags::UriParamsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.BindingFlags.html\" title=\"struct glib::BindingFlags\">BindingFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.BindingFlags.html\" title=\"struct glib::BindingFlags\">BindingFlags</a>","synthetic":false,"types":["glib::gobject::auto::flags::BindingFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.SignalFlags.html\" title=\"struct glib::SignalFlags\">SignalFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.SignalFlags.html\" title=\"struct glib::SignalFlags\">SignalFlags</a>","synthetic":false,"types":["glib::gobject::auto::flags::SignalFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.ParamFlags.html\" title=\"struct glib::ParamFlags\">ParamFlags</a>&gt; for <a class=\"struct\" href=\"glib/struct.ParamFlags.html\" title=\"struct glib::ParamFlags\">ParamFlags</a>","synthetic":false,"types":["glib::gobject::flags::ParamFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"glib/struct.LogLevels.html\" title=\"struct glib::LogLevels\">LogLevels</a>&gt; for <a class=\"struct\" href=\"glib/struct.LogLevels.html\" title=\"struct glib::LogLevels\">LogLevels</a>","synthetic":false,"types":["glib::log::LogLevels"]}];
implementors["pango"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"pango/struct.FontMask.html\" title=\"struct pango::FontMask\">FontMask</a>&gt; for <a class=\"struct\" href=\"pango/struct.FontMask.html\" title=\"struct pango::FontMask\">FontMask</a>","synthetic":false,"types":["pango::auto::flags::FontMask"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"pango/struct.ShapeFlags.html\" title=\"struct pango::ShapeFlags\">ShapeFlags</a>&gt; for <a class=\"struct\" href=\"pango/struct.ShapeFlags.html\" title=\"struct pango::ShapeFlags\">ShapeFlags</a>","synthetic":false,"types":["pango::auto::flags::ShapeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"pango/struct.ShowFlags.html\" title=\"struct pango::ShowFlags\">ShowFlags</a>&gt; for <a class=\"struct\" href=\"pango/struct.ShowFlags.html\" title=\"struct pango::ShowFlags\">ShowFlags</a>","synthetic":false,"types":["pango::auto::flags::ShowFlags"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"syn/punctuated/enum.Pair.html\" title=\"enum syn::punctuated::Pair\">Pair</a>&lt;T, P&gt;&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>&gt; for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>","synthetic":false,"types":["syn::error::Error"]}];
implementors["toml"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"toml/map/struct.Map.html\" title=\"struct toml::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>&gt;","synthetic":false,"types":["toml::map::Map"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()